class Snake
{
  constructor(){ //default snake
    this.body = [];
    this.body[0] = createVector(0,0);
    this.xSnake = 0;
    this.ySnake = 0;
  }
  update(){ // update the snake
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xSnake;
    head.y += this.ySnake;
    if(head.x <=1-snakeSize)
    {
        head.x = 750;
    }
    else if(head.x >=751-snakeSize)
    {
        head.x = 0;
    }
    else if(head.y <=1-snakeSize)
    {
        head.y = 500;
    }
    else if(head.y >=501-snakeSize)
    {
        head.y = 0;
    }
    this.body.push(head);
  }
  setMove(x,y) // update the snake
  {
    this.xSnake = x;
    this.ySnake = y;
  }
  tail()
  {
    let head = this.body[this.body.length-1].copy();
    this.body.push(head);
  }
  die() // endgame condition
  {
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    console.log(x,y);
    for(let i = 0;i<this.body.length-1;i++)
    {
      let dead = this.body[i];
      if(dead.x == x && dead.y == y)
        {
          console.log("You are died.");
          return true;
        }
    }
    return false;
  }
  eat(meal){
    if(this.body[this.body.length-1].x == meal.x && this.body[this.body.length-1].y == meal.y)
    {
      point++;
      this.tail();
      console.log("The food is eaten");
      console.log(point);
      food();
    }
  }
  display(){ // draw the snake
    for(let i=0;i<this.body.length;i++)
    {
    fill(0,255,0);
    rect(this.body[i].x,this.body[i].y,snakeSize,snakeSize);        
    }
}
}