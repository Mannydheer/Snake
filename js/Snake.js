export class Snake {
  constructor(ctx) {
    this.ctx = ctx;
    this.color = "green";
    this.width = 20;
    this.height = 20;
    this.currentDirection = null;
    this.lastHeadPosition = {
      x: null,
      y: null,
    };
    this.snakeList = [
      { x: 240, y: 200 },
      { x: 220, y: 200 },
      { x: 200, y: 200 },
    ];
  }

  drawSnake(x, y, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, this.width, this.height);
  }

  updateSnakeMovement() {
    switch (this.currentDirection) {
      case "up":
        this.snakeList.forEach((snakeList, index) => {
          if (index === 0) {
            this.snakeList[0] = {
              ...this.snakeList[0],
              y: (snakeList.y -= 1),
            };
          }

          if (
            snakeList.y >= this.lastHeadPosition.y &&
            snakeList.x >= this.lastHeadPosition.x
          ) {
            snakeList.y -= 1;
          } else {
            console.log("else");
            snakeList.x += 1;
          }
        });

        break;
      case "down":
        this.snakeList.forEach((snakeList, index) => {
          if (index === 0) {
            this.snakeList[0] = {
              ...this.snakeList[0],
              y: (snakeList.y += 1),
            };
          }
          snakeList.y += 1;
        });
        break;
      case "left":
        this.snakeList.forEach((snakeList, index) => {
          if (index === 0) {
            this.snakeList[0] = {
              ...this.snakeList[0],
              x: (snakeList.x -= 1),
            };
          }
          snakeList.x -= 1;
        });

        break;
      case "right":
        this.snakeList.forEach((snakeList, index) => {
          if (index === 0) {
            this.snakeList[0] = {
              ...this.snakeList[0],
              x: (snakeList.x += 1),
            };
          }
          snakeList.x += 1;
        });

        break;

      default:
        break;
    }
  }
  updateCurrentDirection(direction) {
    //update current direction of snake
    this.currentDirection = direction;
    //keep track of the last position of head.
    //this way all the snake bodies will follow.
    this.lastHeadPosition = this.snakeList[0];
  }
}
