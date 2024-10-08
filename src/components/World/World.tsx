import { ReactP5Wrapper } from "react-p5-wrapper";
import { useResizeDetector } from "react-resize-detector";
import GridSketch from "./Sketches/GridSketch";

export default function World(props: {code: string | undefined}) {
    const { width, height, ref } = useResizeDetector();

    return(
      <div className="size-full" ref={ref} onContextMenu={(e) => {e.preventDefault()}}>
        <ReactP5Wrapper sketch={GridSketch} width={width} height={height} dx={50} dy={50} code={props.code} />
      </div>
    ); 
  }