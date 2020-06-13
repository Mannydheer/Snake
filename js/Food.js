export class Food {
  constructor(ctx) {
    this.width = 15;
    this.height = 15;
    this.color = "blue";
    this.ctx = ctx;
    this.randomX = this.generateRandomPosition();
    this.randomY = this.generateRandomPosition();
  }

  drawFood() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.randomX, this.randomY, this.width, this.height);
    //set the foot eaten to false after first render so it doesn't generate
    //it repeatedly.
  }
  createNewFood() {
    this.randomX = this.generateRandomPosition();
    this.randomY = this.generateRandomPosition();
  }

  generateRandomPosition() {
    return Math.floor(Math.random() * 600);
  }
}
