//Ahmet Kadir Zengin
let snake;
let snakeSize = 25;
let meal;
let mealSize = 25;
let point = 0;

function setup() {
  createCanvas(750, 500);
  frameRate(5); //makes the snake move slower
  snake = new Snake();
  food();
}

function draw() {
  background(220);
  board();
}

function board()
{
  snake.eat(meal);
  snake.update();
  snake.display();
  if(snake.die()) //end
  {
    console.log("You are died.");
    let endScreen = createImg('https://i.hizliresim.com/dg7pub2.gif');
    endScreen.size(750,500);
    endScreen.position(0,0);
    noLoop();
  }
  fill(255,0,0);
  rect(meal.x,meal.y,mealSize,mealSize); //food
}

function food()
{
  let xFood = Math.floor(Math.random() * (750-snakeSize));
  xFood -= xFood%snakeSize;
  let yFood = Math.floor(Math.random() * (500-snakeSize));
  yFood -= yFood%snakeSize;
  console.log(xFood, yFood);
  meal = createVector(xFood,yFood);
}

function keyPressed() { // coords
  if (keyCode === UP_ARROW)
  {
    snake.setMove(0,-snakeSize);
  }
  else if (keyCode === RIGHT_ARROW)
  {
    snake.setMove(snakeSize,0);
  }
  else if(keyCode === LEFT_ARROW)
  {
    snake.setMove(-snakeSize,0);
  }
  else if(keyCode === DOWN_ARROW)
  {
    snake.setMove(0,snakeSize);
  }
}