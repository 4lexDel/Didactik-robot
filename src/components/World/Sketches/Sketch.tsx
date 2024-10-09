import { P5CanvasInstance, SketchProps } from "react-p5-wrapper";
import Block from "../../../models/Block";

type StateCallback = (state: string) => void;

class Robot {
    x: number;
    y: number;

    scale: number = 0.9;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    display(p5: P5CanvasInstance, dx: number, dy: number) {
        p5.fill(p5.color(200, 100, 50));
        p5.ellipse(this.x + dx / 2, this.y + dy / 2, dx * this.scale, dy * this.scale);
    }
}

class Utils {
    static resize2DArray(
        array: Array<Array<number>>,
        n2: number,
        m2: number,
        defaultValue: number
    ): Array<Array<number>> {
        let resizedArray = array.slice(0, n2);

        for (let i = 0; i < n2; i++) {
            if (i < array.length) {
                resizedArray[i] = array[i].slice(0, m2);
            } else {
                resizedArray[i] = [];
            }

            while (resizedArray[i].length < m2) {
                resizedArray[i].push(defaultValue);
            }
        }

        return resizedArray;
    }
}

export default function Sketch(p5: P5CanvasInstance) {
    let currentWidth: number = 200;
    let currentHeight: number = 200;

    let map: Array<Array<number>>;

    let dx: number = -1;
    let dy: number = -1;

    let nbX: number = -1;
    let nbY: number = -1;

    let robot: Robot = new Robot(0, 0);
    let code: string;
    let editBlock: Block;

    let readonly = true;
    let isCodeRunning: boolean = false;

    let onStateChange: StateCallback | null = null;

    p5.setup = () => p5.createCanvas(currentWidth, currentHeight, p5.WEBGL);

    p5.updateWithProps = async (props: SketchProps) => {
        if ((props.width && props.height) && (currentWidth !== props.width || currentHeight !== props.height)) {
            currentWidth = Number(props.width);
            currentHeight = Number(props.height);
            resizeCanvas(true);
        }

        if ((props.dx && Number(props.dx) > 0 && props.dy && Number(props.dy) > 0) && (dx !== props.dx || dy !== props.dy)) {
            dx = Number(props.dx);
            dy = Number(props.dy);
            resizeCanvas(false);
        }

        if(props.onStateChange && props.onStateChange !== onStateChange) {
            onStateChange = props.onStateChange as StateCallback;
        }

        if (props.code && props.code !== code && !isCodeRunning) {
            code = String(props.code);

            console.log("Compile code");
            isCodeRunning = true;
            await compileUserCode(code);

            acknowledgeEnd();
            isCodeRunning = false;
        }

        if (props.editBlock) {
            editBlock = props.editBlock as Block;
            // editBlock.color = getCssVariableValue("--"+editBlock.color);
        }

        if(props.readonly !== null && props.readonly !== undefined && props.readonly !== readonly) {
            readonly = Boolean(props.readonly);            
        }
    };

    const resizeCanvas = (areNewDims: Boolean) => {
        areNewDims && p5.resizeCanvas(currentWidth, currentHeight);

        if (dx > 0 && dy > 0) {
            nbX = Math.trunc(currentWidth / dx) + 1;
            nbY = Math.trunc(currentHeight / dy) + 1;

            initializeMap();
        }
    }

    const initializeMap = () => {
        // console.log("initializeMap");
        if (!map){
            map = Array.from({ length: nbX }, () => Array(nbY).fill(0));
            // Start
            map[0][0] = 3;
            robot.x = 0;
            robot.y = 0;
        }
        else {
            map = Utils.resize2DArray(map, nbX, nbY, 0);
        }
    }

    p5.mousePressed = () => {
        // console.log("Mousse pressed");
        // console.log(`X=${p5.mouseX} Y=${p5.mouseY} Button=${p5.mouseButton}`);        
        if(!readonly){
            let mapCoords = convertMouseCoordsToMapCoords(p5.mouseX, p5.mouseY);
            
            if(mapCoords){
                if (p5.mouseButton === "left" && editBlock) {
                    // Case of the start block or end block, remove all the previous one
                    if(editBlock.id === 3){
                        replaceMapCells(editBlock.id, 0);
                        robot.x = mapCoords.x * dx;
                        robot.y = mapCoords.y * dy;
                    }
                    else if(editBlock.id === 5){
                        replaceMapCells(editBlock.id, 0);
                    }

                    if(map[mapCoords.x][mapCoords.y] !== 3) updateMapCell(mapCoords.x, mapCoords.y, editBlock.id);
                }
                else {
                    if(map[mapCoords.x][mapCoords.y] !== 3) updateMapCell(mapCoords.x, mapCoords.y, 0);
                }
            }
        }
    }

    const convertMouseCoordsToMapCoords = (x: number, y: number) => {
        if (x < 0 || y < 0) return null;

        let mx = Math.trunc(x / dx);
        let my = Math.trunc(y / dy);

        if (mx < 0 || mx >= map.length || my < 0 || my >= map[0].length) return null;

        return {
            x: mx,
            y: my
        }
    }

    const replaceMapCells = (targetId: number, newId: number) => {
        for (let x = 0; x < map.length; x++) {
            for (let y = 0; y < map[x].length; y++) {
                if(map[x][y] === targetId) map[x][y] = newId;
            }
        }
    }

    const updateMapCell = (x: number, y: number, val: number) => {
        if (x < 0 || x >= map.length || y < 0 || y >= map[0].length) return;
        map[x][y] = val;
    }

    const compileUserCode = (code: string) => {
        return new Promise(async (res, rej) => {
            onStateChange && onStateChange("running");

            function* main(initX: number, initY: number, map: Array<Array<number>>): any { }

            eval("main=" + code);

            let mapCoords = convertMouseCoordsToMapCoords(robot.x, robot.y);

            if (!mapCoords) return;

            let iterator = main(mapCoords.x, mapCoords.y, map);

            let result = iterator.next();
            console.log(result);

            while (!result.done) {
                console.log(result);
                if (!result.value) continue;

                switch (result.value.move) {
                    case "up":
                        !checkCollision(robot.x, robot.y - dy) && (robot.y -= dy);
                        break;
                    case "down":
                        !checkCollision(robot.x, robot.y + dy) && (robot.y += dy);
                        break;
                    case "left":
                        !checkCollision(robot.x - dx, robot.y) && (robot.x -= dx);
                        break;
                    case "right":
                        !checkCollision(robot.x + dx, robot.y) && (robot.x += dx);
                        break;
                }

                result = await (async () => {
                    return new Promise((res, rej) => {
                        setTimeout(() => {
                            // mapCoords = convertMouseCoordsToMapCoords(robot.x, robot.y);
                            // if (!mapCoords) return;
                            res(iterator.next());
                        }, 400);
                    });
                })();
            }
            console.log("End");
            res("end");
        });
    }

    const acknowledgeEnd = () => {
        setTimeout(() => {
            // When it's over
            const startCoords = getStartPointCoords();

            if(startCoords) {
                robot.x = startCoords.x;
                robot.y = startCoords.y;
            }

            onStateChange && onStateChange("stopped");
        }, 1000);
    }

    const getStartPointCoords = () => {
        for (let x = 0; x < map.length; x++) {
            for (let y = 0; y < map[x].length; y++) {
                if(map[x][y] === 3) return {x, y};
            }
        }

        return null;
    }

    const checkCollision = (mx: number, my: number) => {
        let mapCoords = convertMouseCoordsToMapCoords(mx, my);
        return !mapCoords || mapCoords.x < 0 || mapCoords.x >= map.length || mapCoords.y < 0 || mapCoords.y >= map[0].length || map[mapCoords.x][mapCoords.y] === 1;
    }

    p5.draw = () => {
        p5.background(0, 0, 0);
        p5.push();
        p5.translate(-currentWidth / 2, -currentHeight / 2);
        // p5.normalMaterial();
        // p5.noStroke();
        displayMap();
        displayRobot();

        p5.pop();
    };

    const displayMap = () => {
        if (map) {
            for (let x = 0; x < map.length; x++) {
                for (let y = 0; y < map[x].length; y++) {
                    switch (map[x][y]) {
                        case 0:
                            p5.fill(p5.color(247, 220, 111)); // Dirt/dust
                            break;
                        case 1:
                            p5.fill(p5.color(0, 0, 50)); // Dark blue       // COLLIDE
                            break;
                        case 2:
                            p5.fill(p5.color(200, 100, 100)); // Red
                            break;
                        case 3:
                            p5.fill(p5.color(54, 214, 0)); // Start
                            break;
                        case 4:
                            p5.fill(p5.color(255, 162, 0)); // Inter
                            break;
                        case 5:
                            p5.fill(p5.color(255, 0, 0)); // End
                            break;
                        case 6:
                            p5.fill(p5.color(124, 64, 0)); // Wood
                            break;
                    }
                    p5.rect(x * dx, y * dy, dx, dy);
                }
            }
        }
    }

    const displayRobot = () => {
        robot.display(p5, dx, dy);
    }
}