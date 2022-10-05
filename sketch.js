let y = 50;
let h = 10;
let w = 10;

let r = 1;
let g = 1;
let b = 1;
let firstTime = true; //a variable that is used to make part of the draw() function run only once

function setup() {
  createCanvas(1350, 650);

  frameRate(20);
  rectMode(CENTER); //to set the base point of drawing the rectangles on the center
  noStroke();
}

function draw() {
  if (firstTime) {
    //this block runs only one time
    /*The two for loops draw the squares and circles, the counter 'j' is for drawing each column 
    and the counter 'i' is for repeating the same process horizontally*/
    for (let i = 0; i < 27; i++) {
      for (let j = 0; j < 13; j++) {
        //drawing the squares:
        r = random(50, 150);
        g = random(0, 10);
        b = random(0, 0);
        fill(r);
        let x_rect = 25 + 50 * i;
        let y_rect = 25 + 50 * j;
        rect(x_rect, y_rect, 50, 50);

        //drawing the small ellipses:
        r = random(100, 255);
        g = random(100, 255);
        b = random(100, 255);
        fill(r, g, b);
        w = random(10, 15);
        h = w;
        ellipse(25 + 50 * i, 25 + 50 * j, w, h);
      }
    }
    firstTime = false; /*after the loop is finished this is set two false so that the code block won't run
    the next time the draw() function runs*/
  } else {
    //this block of code runs along with the draw() function except for the first time:

    //drawing the bigger circles is dependent on the position of the mouse on the screen
    let HSquaresBefore = Math.floor(mouseX / 50); //to get the number of horizontal squares before mouseX
    let VSquaresBefore = Math.floor(mouseY / 50); //to get the number of vertical squares before mouseY

    /*at the beginning of running the code mouseX equals 0, we don't want anything to happen when the mouse has not
    moved to the position of a square yet. That's why we have the condition (mouseX > 0) in the if condition*/
    if (mouseX > 0) {
      w = 40;
      h = 40;
      r = random(100, 255);
      g = random(100, 255);
      b = random(100, 255);
      fill(r, g, b);
      /*now we add 25 pixels to the center of the previous square that we have calculated using the 
      variables HSquaresBefore and VSquaresBefore*/
      ellipse(HSquaresBefore * 50 + 25, VSquaresBefore * 50 + 25, w, h);
    }
  }
}
