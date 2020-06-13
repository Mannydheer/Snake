//Engine will be responsible for everything related to functions of the game.
export class Engine {
  //pass it the div where all game logic will live.
  constructor(gameRoot) {
    this.gameRoot = gameRoot;
    this.gameRunning = true;
  }

  endGame() {
    this.gameRunning = false;
  }
}
