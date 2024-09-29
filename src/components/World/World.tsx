import { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { useResizeDetector } from "react-resize-detector";
import GridSketch from "./Sketches/GridSketch";

export default function World() {
    const [rotation, setRotation] = useState(0);

    const { width, height, ref } = useResizeDetector();
    // const [dim, setDim] = useState({width: 0, height: 0});
  
    useEffect(() => {
      const interval = setInterval(
        () => setRotation(rotation => rotation + 100),
        100
      );
  
      return () => {
        clearInterval(interval);
      };
    }, []);

    return(
      <div className="size-full" ref={ref} onContextMenu={(e) => {e.preventDefault()}}>
        {/* <center>World</center>
        <center><div>{`${width} | ${height}`}</div></center> */}
        <ReactP5Wrapper sketch={GridSketch} rotation={rotation} width={width} height={height} dx={50} dy={50} />
      </div>
    ); 
  }