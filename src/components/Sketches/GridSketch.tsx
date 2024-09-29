import { P5CanvasInstance, SketchProps } from "react-p5-wrapper";

class Robot{
    x: number;
    y: number;

    scale: number = 0.9;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    display(p5: P5CanvasInstance, dx: number, dy: number){
        p5.fill(p5.color(200, 100, 50));
        p5.ellipse(this.x+dx/2, this.y+dy/2, dx*this.scale, dy*this.scale);
    }
}

export default function GridSketch(p5: P5CanvasInstance) {
    let currentWidth: number = 200;
    let currentHeight: number = 200;

    let map: Array<Array<number>>;

    let dx: number = -1;
    let dy: number = -1;

    let nbX: number = -1;
    let nbY: number = -1;

    let robot: Robot = new Robot(0, 0);

    p5.setup = () => p5.createCanvas(currentWidth, currentHeight, p5.WEBGL);

    p5.updateWithProps = (props: SketchProps) => {
        if ((props.width && props.height) && (currentWidth != props.width || currentHeight != props.height)) {
            currentWidth = Number(props.width);
            currentHeight = Number(props.height);

            console.log("DIM");
            console.log(props.width);
            console.log(props.height);

            resizeCanvas(true);
        }

        if ((props.dx && Number(props.dx) > 0 && props.dy && Number(props.dy) > 0)  && (dx != props.dx || dy != props.dy)) {
            dx = Number(props.dx);
            dy = Number(props.dy);
            resizeCanvas(false);
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
        console.log("initializeMap");
        map = Array.from({ length: nbX }, () => Array(nbY).fill(0));
    }

    p5.mousePressed = () => {
        console.log("Mousse pressed");
        console.log(`X=${p5.mouseX} Y=${p5.mouseY} Button=${p5.mouseButton}`);

        if (p5.mouseButton === "left") {
            let mapCoords = convertMouseCoordsToMapCoords(p5.mouseX, p5.mouseY);
    
            mapCoords && updateMapCell(mapCoords.x, mapCoords.y, (map[mapCoords.x][mapCoords.y]+1)%2);
        }
        else{
            robot.x += dx;
            robot.y += dy;
        }

    }

    const convertMouseCoordsToMapCoords = (x: number, y: number) => {
        let mx = Math.trunc(x/dx);
        let my = Math.trunc(y/dy);

        if (mx < 0 || mx >= map.length || my < 0 || my >= map[0].length) return null;

        return {
            x: mx,
            y: my
        }
    }

    const updateMapCell = (x: number, y: number, val: number) => {
        if (x < 0 || x >= map.length || y < 0 || y >= map[0].length) return;
        map[x][y] = val;
    }

    p5.draw = () => {
        p5.background(100);
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
                            p5.fill(p5.color(0, 200, 0));
                            break;

                        case 1:
                            p5.fill(p5.color(200, 0, 0));
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