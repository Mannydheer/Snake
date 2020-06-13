export class Food {
  constructor(ctx) {
    this.width = 15;
    this.height = 15;
    this.color = "blue";
    this.ctx = ctx;
    this.foodEaten = false;
    this.foodAvailable = true;
    this.randomX = this.generateRandomPosition();
    this.randomY = this.generateRandomPosition();
  }

  drawFood() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.randomX, this.randomY, this.width, this.height);
  }

  generateRandomPosition() {
    return Math.floor(Math.random() * 600);
  }
}
