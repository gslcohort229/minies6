var count = 0;
let framesPerSecond = 4;


function setup() {
  createCanvas(400, 400);
  bubble = new Bubble();
  bubble1 = new Bubble();
}

function draw() {
  background(10);
  bubble1.show();
  bubble1.move();
  
  text(count, 120, 110);
  
  count += 1;
}


class Bubble {
  constructor(){

  this.x = 200;
    this.y =150;
  }
  
  move() {
    this.x = this.x + random(-15, 5);
    this.y = this.y + random(-5, 5);
  }
    
    show() {
      stroke(255);
      strokeWeight(4);
      noFill();
      ellipse(bubble.x, bubble.y, 24, 24);
      
    }
  
  
  
}// Define the canvas and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Draw a rectangle
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 50, 50);

// Draw a circle
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();

// Draw an image
var img = new Image();
img.src = "image.png";
img.onload = function() {
    ctx.drawImage(img, 150, 10);
}

// Draw some text
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.fillText("Hello, World!", 250, 50);
