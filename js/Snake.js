export class Snake {
  constructor(ctx) {
    this.ctx = ctx;
    this.color = "green";
    this.width = 15;
    this.height = 15;
    this.currentDirection = null;
    this.velocity = 15;
    this.foodEatenBySnake = 0;
    //this will hold the snakes pieces.
    //index 0 = head, 1 = body , 2 = tail.
    this.snakeList = [
      {
        x: 245,
        y: 200,
      },
      {
        x: 230,
        y: 200,
      },
      {
        x: 215,
        y: 200,
      },
    ];
  }

  drawSnake(x, y, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, this.width, this.height);
    this.ctx.font = "20px Arial";
    this.ctx.fillText(`${this.foodEatenBySnake} - Food Count`, 5, 30);
  }
  incrementFoodEaten() {
    this.foodEatenBySnake++;
  }

  updateSnakeMovement() {
    //with a for loop, we are starting the the last index of the array.
    //as we loop, in the following order.
    //the 2nd index (x,y) take the 1st index (x,y) positions.
    //the 1st index  (x,y) take the 0th index (x,y) positions.
    //the 0th index (x,y) take the NEW values of the (x,y).

    for (let index = this.snakeList.length - 1; index >= 0; index--) {
      //keep track of the snakes current direction based on keypress.
      //Rearranging snake positions.

      switch (this.currentDirection) {
        case "up":
          if (index === 0) {
            this.snakeList[index].y = this.snakeList[index].y - this.velocity;
          } else {
            this.snakeList[index].x = this.snakeList[index - 1].x;
            this.snakeList[index].y = this.snakeList[index - 1].y;
          }
          break;
        case "down":
          if (index === 0) {
            this.snakeList[index].y = this.snakeList[index].y + this.velocity;
          } else {
            this.snakeList[index].x = this.snakeList[index - 1].x;
            this.snakeList[index].y = this.snakeList[index - 1].y;
          }
          break;
        case "left":
          if (index === 0) {
            this.snakeList[index].x = this.snakeList[index].x - this.velocity;
          } else {
            this.snakeList[index].x = this.snakeList[index - 1].x;
            this.snakeList[index].y = this.snakeList[index - 1].y;
          }
          break;
        case "right":
          if (index === 0) {
            this.snakeList[index].x = this.snakeList[index].x + this.velocity;
          } else {
            this.snakeList[index].x = this.snakeList[index - 1].x;
            this.snakeList[index].y = this.snakeList[index - 1].y;
          }
          break;
        default:
          break;
      }
    }
  }
}
