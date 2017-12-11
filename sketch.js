// Johan Steven Ospina Arroyave
//DAT455
var bubbles = [];

function setup() {
  var canvas = createCanvas(594, 841);
    canvas.parent("myContainer");

  for (var i = 0; i < 7; i++) {
    bubbles[i] = new Bubble(random(width-48), random(height-48));
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
    this.x1 = width-48
    this.x2 = 48
    this.y1 = height-48
    this.y2 = 48

    if (  this.x > this.x1  ||   this.x < this.x2){
      this.speedX = this.speedX * -1;
    }
    if (  this.y > this.y1 ||   this.y < this.y2){
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
