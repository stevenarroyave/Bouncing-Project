// Johan Steven Ospina Arroyave
//DAT455
var bubbles = [];

function setup() {
  var canvas = createCanvas(594, 841);
    canvas.parent("myContainer");

  for (var i = 0; i < 7; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = 48;
  this.col = color(255);
  this.speedX = random(-2, 2);
  this.speedY = random(-2, 2);

  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255));
    this.speedX = this.speedX * -1;
    this.speedY = this.speedY * -1;
  }

  this.display = function() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  this.update = function() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    if (  this.x > width ||   this.x < 0){
      this.speedX = this.speedX * -1;
    }
    if (  this.y > height ||   this.y < 0){
      this.speedY = this.speedY * -1;
    }
  }
}


function draw() {
  background(176,224,230);

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
    for (var j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();

      }
    }
  }
}
