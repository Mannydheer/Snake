import { Engine } from "./Engine.js";
import { Canvas } from "./Canvas.js";
//constants.
import { GAME_WIDTH, GAME_HEIGHT } from "./GameConstants.js";

//instantiate the class Engine once.
const gameEngine = new Engine(document.getElementById("app"));

//-------------REQUEST ANIMATION FRAME ---------------
let requestAnimationFrame = window.requestAnimationFrame;
window.mozRequestAnimationFrame;
window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let deltaTime = 0;
let oldTimeStamp = 0;
let fps;

//-------------------GAME LOOP --------------------------
function gameLoop(timeStamp) {
  // Calculate the number of seconds passed since the last frame
  //we divide by 1000 to get the delta time in seconds between each frame.
  deltaTime = (timeStamp - oldTimeStamp) / 1000;
  //this will have the previous time stamp for the next frame.
  oldTimeStamp = timeStamp;
  //calculates the frames per second.
  fps = Math.round(1 / deltaTime);

  //call the game loop for each frame.
  requestAnimationFrame(gameLoop);
}
//----------------START GAME-------------------
function startGame() {
  requestAnimationFrame(gameLoop);
}

//Start out game.
startGame();

//pass the game root to the Canvas.
// const newCanvas = new Canvas(
//   "gameCanvas",
//   document.getElementById("app"),
//   GAME_WIDTH,
//   GAME_HEIGHT
// );

// newCanvas.create();
