const Sketch = (W, H) => (p) => {

  let scale = W/10;
  let start = [5,5];
  let endSize = 15;

  const column = 10;
  const row = 10;

  let grid = Array.from({
    // create array of length `row`
    length: row 
    // map function to generate values
  }, () => new Array(column).fill(0));

  let currentPosition = start;
  let endless = false;

  p.setup = () => {
    p.createCanvas(W,H);
    p.frameRate(60);
    p.background(0);
  }

  p.draw = () => {
    let pal = [
      p.color(234, 228, 233),
      p.color(255, 241, 230),
      p.color(253, 226, 228),
      p.color(250, 210, 225),
      p.color(226, 236, 233),
      p.color(190, 225, 230),
      p.color(240, 239, 235),
      p.color(223, 231, 253),
      p.color(205, 218, 253)
    ];

    p.noFill();
    p.strokeWeight(W/200);

    if((currentPosition[0]+currentPosition[1]+grid[currentPosition[0]][currentPosition[1]]) % 2){
      p.stroke(pal[grid[currentPosition[0]][currentPosition[1]] % 9]);
    } else {
      p.stroke(0);
    }
    
    p.ellipse(currentPosition[0]*scale, currentPosition[1]*scale, grid[currentPosition[0]][currentPosition[1]] * (W/100));
    
    currentPosition = step(currentPosition[0], currentPosition[1]);
    
    if(grid[currentPosition[0]][currentPosition[1]] == endSize){
      if(!endless){
        p.noLoop();
      } else {
        p.clear();
        p.background(0);
        start = [Math.round(p.random(1,9)), Math.round(p.random(1,9))];
        grid = new Array(10).fill(new Array(10).fill(1));
      }
    }

  } 

  function step(x, y) {
  
    grid[currentPosition[0]][currentPosition[1]] += 1;
    console.log("gridValue Post: ", grid[currentPosition[0]][currentPosition[1]] );
    let randX;
    let randY;
    
    randX = Math.round(p.random(-0.8,0.8));
    randY = Math.round(p.random(-0.8,0.8));
    
    if(x+randX >= 10 || x+randX <= 0){
      x = x;
    } else {
      x = x + randX;
    }
    
    if(y+randY >= 10 || y+randY <= 0){
      y = y;
    } else {
      y = y + randY;
    }
    console.log("Next Position: ", x, ",", y );
    return [x,y];
    
  }


}
export default Sketch;