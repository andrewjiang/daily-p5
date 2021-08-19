import Transformer from '../utils/transformer';
import {
  range
} from '../utils/utils';

// class Image {
//   constructor(image, x, y, filter){

//   }

// }

const Sketch = (W, H) => (p) => {
  let { 
    // Constants
    RADIANS,
    PI, 
    HALF_PI: PI_2,
    QUARTER_PI: PI_4,
    TWO_PI,
    THRESHOLD,
    BLUR,
    POSTERIZE,
    INVERT,
    GRAY,
    // Time
    // Not sure why when millis() is used it errors out on _millisStart. 
    // A workaround is just to use p.millis()
    year, month, day, hour, minute, second,
  } = p

  const tf = new (Transformer(p))()

  let manImg;

  p.preload = () => {
    manImg = p.loadImage('/static/art.jpeg')
  }

  p.setup = () => {
    p.createCanvas(1.67*W, 0.6*H)
    p.angleMode(RADIANS)
  }

  p.draw = () => {
    p.clear();
    p.background(0);
    p.strokeWeight(1);
    p.noFill();
    for (let i = 1; i < 62; i=i+4) {
      for (let j = 1; j < 11; j++) {
        for (let x = 10; x < 100; x = x+10){
          let r = p.random(8)-4;
          if (j % 2==0){
            p.arc(i*25+75+r, j*50+r+35, 100-x, 100-x, 0, TWO_PI*(r/100));
          } else {
            p.arc(i*25+50+r, j*50+r+35, 100-x, 100-x, 0, TWO_PI*(r/100));
          }
        }
      }
    }

    let x = 300;
    let y = 450;

    p.stroke(255);
    p.strokeWeight(20);
    p.rect(75, 75 ,x,y);
    p.rect(475, 75 ,x,y);
    p.rect(875, 75 ,x,y);
    p.rect(1275, 75 ,x,y);
    
    let Image = p.createGraphics(x,y);
    Image.stroke(255);
    Image.background(255,255,255,255);
    Image.image(manImg, 0, 0, x,y)
    Image.filter(BLUR,5);
    p.image(Image, 75, 75);

    let Image2 = p.createGraphics(x,y);
    Image2.stroke(255);
    Image2.background(255,255,255,255);
    Image2.image(manImg, 0, 0, x,y)
    
    Image2.filter(THRESHOLD);
    p.image(Image2, 475, 75);

    let Image3 = p.createGraphics(x,y);
    Image3.stroke(255);
    Image3.background(255,255,255,255);
    Image3.image(manImg, 0, 0, x,y)
    
    Image3.filter(POSTERIZE, 10);
    p.image(Image3, 875, 75);

    let Image4 = p.createGraphics(x,y);
    Image4.stroke(255);
    Image4.background(255,255,255,255);
    Image4.image(manImg, 0, 0, x,y)
    
    Image4.filter(INVERT, 10);
    Image4.filter(GRAY, 10);
    p.image(Image4, 1275, 75);

    // p.image(manImg, 50, 50, 350, 500)
    // p.image(manImg, 450, 50, 350, 500)
    // p.image(manImg, 850, 50, 350, 500)
    // p.image(manImg, 1250, 50, 350, 500)
    // p.filter(BLUR,3);
    // p.filter(BLUR,3);
  } 
}
export default Sketch