import { P5CanvasInstance, SketchProps } from "react-p5-wrapper";

export default function FirstSketch(p5: P5CanvasInstance) {
    let rotation = 0;

    let currentWidth = 200;
    let currentHeight = 200;

    // useEffect(() => {

    // }, [props.dim]);

    p5.setup = () => p5.createCanvas(currentWidth, currentHeight, p5.WEBGL);

    p5.updateWithProps = (props: SketchProps) => {
        if (props.rotation) {
            rotation = (Number(props.rotation)  * Math.PI) / 180;
        }

        if ((props.width && props.height) && (currentWidth != props.width || currentHeight != props.height)) {    
          currentWidth = Number(props.width);     
          currentHeight = Number(props.height);   

          console.log("DIM");
          console.log(props.width);
          console.log(props.height);

          p5.resizeCanvas(currentWidth, currentHeight);
        }
    };

    p5.draw = () => {
        p5.background(100);
        p5.normalMaterial();
        p5.noStroke();
        p5.push();
        p5.rotateY(rotation);
        p5.box(100);
        p5.pop();
    };
}