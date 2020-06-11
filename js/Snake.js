export class Snake {
  constructor(ctx) {
    this.ctx = ctx;
    this.color = "green";
    this.width = 20;
    this.height = 20;
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
}
