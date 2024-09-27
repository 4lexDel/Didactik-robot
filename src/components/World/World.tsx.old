
import Sketch from 'react-p5';

var x = 50;
var speed = 5;

function World() {
    const setup = (p5: any, canvasParentRef: any) => {
        const cnv = p5.createCanvas(500, 400).parent(canvasParentRef);
    }

    const draw = (p5: any) => {
        p5.frameRate(30);
        if (speed > 0) {
            if (x + 50 < p5.width) {
                x += speed
            } else {
                speed = -speed;
            }
        } else {
            if (x - 50 > 0) {
                x += speed;
            } else {
                speed = -speed;
            }
        }

        p5.background(255, 120, 20);
        p5.ellipse(x, 100, 100);
    }

    return (
        <Sketch 
            setup={setup} 
            draw={draw} 
            mousePressed={((event: any) => {console.log(`x=${event.mouseX} | y=${event.mouseY}`)})} 
        />
    )
}

export default World;
        