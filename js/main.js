import { Engine } from "./Engine.js";
import { Canvas } from "./Canvas.js";
import { Snake } from "./Snake.js";
//constants.
import { GAME_WIDTH, GAME_HEIGHT } from "./GameConstants.js";

//instantiate the class Engine once.
const gameEngine = new Engine(document.getElementById("app"));
//-----------------CANVAS CLASS----------------------
//!TODO refactor canvas into ENGINE.
const canvas = new Canvas(
  "gameCanvas",
  document.getElementById("app"),
  GAME_WIDTH,
  GAME_HEIGHT
);
canvas.create();

//------------------SNAKE CLASS ----------------
const snake = new Snake(canvas.ctx);

//----------------WINDOW EVENT LISTNENERS---------
window.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowUp":
      //KEEP TRACK OF DIRECTION OF THE SNAKE.
      snake.updateCurrentDirection("up");

      break;
    case "ArrowDown":
      snake.updateCurrentDirection("down");

      break;
    case "ArrowRight":
      snake.updateCurrentDirection("right");

      break;
    case "ArrowLeft":
      snake.updateCurrentDirection("left");

      break;

    default:
      break;
  }
});

//-------------REQUEST ANIMATION FRAME ---------------
let requestAnimationFrame = window.requestAnimationFrame;
window.mozRequestAnimationFrame;
window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let deltaTime = 0;
let oldTimeStamp = 0;
let fps;

//-------------------GAME LOOP --------------------------
function gameLoop(timeStamp) {
  //CLEAR CANVAS
  canvas.ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  // Calculate the number of seconds passed since the last frame
  //we divide by 1000 to get the delta time in seconds between each frame.
  deltaTime = (timeStamp - oldTimeStamp) / 1000;
  //this will have the previous time stamp for the next frame.
  oldTimeStamp = timeStamp;
  //calculates the frames per second.
  fps = Math.round(1 / deltaTime);

  //------------------SNAKE --------------------
  snake.snakeList.forEach((snakeListItem, index) => {
    //HEAD OF SNAKE
    if (index === 0) {
      return snake.drawSnake(snakeListItem.x, snakeListItem.y, "black");
    }
    // TAIL OF SNAKE
    else if (index === snake.snakeList.length - 1) {
      return snake.drawSnake(snakeListItem.x, snakeListItem.y, "red");
    }
    // SNAKE BODY
    snake.drawSnake(snakeListItem.x, snakeListItem.y, "green");
  });
  snake.updateSnakeMovement();

  //call the game loop for each frame.
  requestAnimationFrame(gameLoop);
}
//----------------START GAME-------------------
function startGame() {
  requestAnimationFrame(gameLoop);
}

//Start out game.
startGame();
// pass the game root to the Canvas.

// setInterval(() => {
//   snake.snakeList.unshift({ x: snake.snakeList[0].x + 20, y: 200 });
// }, 2000);
