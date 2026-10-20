//Globally initialize runner and array
let runner;
let r = [];

//function to create a canvas and runners
function setup(){
  createCanvas(1500, 750);
  background(255);

  //for loop to create 10 runners(for loops can be changed to add or reduce runners)
  for (let i = 0; i < 10; i++){
    r.push(new Runner);
  }
}

//function to visually illustrate steps adn path taken by runners
function draw(){
  //for loop to display runners
  for (let i = 0; i < 10; i++){
    r[i].step();
    r[i].display();
  }
}

class Runner {

  //randomly sets the starting position of a runner 
  constructor(){
    this.x = width/2 + floor(random(-600,600));
    this.y = height/2 + floor(random(-200,200));
  }

  //step function which decides which direction to move based of a random value 
  step(){
    let decision = floor(random(4));
    if (decision === 0){
      this.x += 1;
    } else if (decision === 1){
      this.x -= 1;
    }else if (decision === 2){
      this.y += 1;
    }else if (decision === 3){
      this.y -= 1;
    }
  }

  //function to plot a point of the runners movement
  display(){
    point(this.x, this.y);
  }

}