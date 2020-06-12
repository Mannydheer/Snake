export class Canvas {
  constructor(id, gameRoot, width, height) {
    this.id = id;
    this.gameRoot = gameRoot;
    this.width = width;
    this.height = height;
    this.ctx = null;
  }

  create() {
    const canvas = document.createElement("canvas");
    canvas.id = this.id;
    canvas.style = "border: solid 1px black";
    canvas.width = this.width;
    canvas.height = this.height;
    this.ctx = canvas.getContext("2d");
    this.gameRoot.appendChild(canvas);
  }
}