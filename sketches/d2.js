import { range } from '../utils/utils'
import Transformer from '../utils/transformer'

const Sketch = (W, H) => (p) => {
  let { 
    // Constants
    RADIANS,
    PI, 
    HALF_PI: PI_2,
    QUARTER_PI: PI_4,
    TWO_PI,

    // Time
    year, month, day, hour, minute, second,
  } = p

  const tf = new (Transformer(p))()

  p.setup = function() {
    p.createCanvas(W, H)
    p.background(0);
    p.frameRate(5);
    p.noLoop();
  }

  p.draw = () => {
    
    p.clear();
    p.background(0);
    let lineArray = [
      [0,1], [0,1], [0,1], [0,1], [0,1],
      [0,1], [0,1], [0,1], [0,1], [0,1],
      [0,1], [0,1], [0,1], [0,1], [0,1],
      [0,1], [0,1], [0,1], [0,1], [0,1],
      [0,1], [0,1], [0,1], [0,1], [0,1],
      [0,1], [0,1], [0,1], [0,1], [0,1],
      [0,1], [0,1], [0,1], [0,1], [0,1],
      [0,1], [0,1], [0,1], [0,1], [0,1],
      [0,1], [0,1], [0,1], [0,1], [0,1],
      [0,1], [0,1], [0,1], [0,1], [0,1],
      [0,1], [0,1], [0,1], [0,1], [0,1],
      [0,1], [0,1], [0,1], [0,1], [0,1]
    ];
    
    let scale = W / (1000/15);
    let startColor = p.color(180,100,150,25);
    
    for(let j = 1; j <= lineArray.length; j++){
      
      for(let i = 1; i < lineArray.length; i++){
        p.strokeWeight(Math.floor(j/10+i/10));
        if(i==1){
          lineArray[i][1] = p.sin(p.random(-scale/50, scale/50));
          lineArray[i][0] = lineArray[i][0] + lineArray[i][1];
        } else {
          
          lineArray[i][1] = lineArray[i-1][1] + p.sin(p.random(-scale/500, scale/500));
          lineArray[i][0] = lineArray[i][0] + lineArray[i][1];
          p.ellipse((i) * scale, lineArray[i][0] * scale + (scale * j - 1), 1);
          p.stroke(startColor);
          p.strokeWeight(Math.floor(j/10+i/10));
          startColor = p.color(
            startColor.levels[0] - p.random(-5*lineArray[i][1],1*lineArray[i][1]),
            startColor.levels[1] - p.random(-5*lineArray[i][1],1*lineArray[i][1]),
            startColor.levels[2] + 2 * p.random(-5*lineArray[i][1],1*lineArray[i][1])
          );
          console.log(startColor);
          //line(
          //    (lineArray.length/2)*scale,
          //    20*scale,
          //    (i) * scale, 
          //    lineArray[i][0] * scale + (scale * j - 1)
          //);
          
        }
      }
    }
  }
}
export default Sketch