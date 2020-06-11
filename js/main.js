import { Engine } from "./Engine.js";
import { Canvas } from "./Canvas.js";
//constants.
import { GAME_WIDTH, GAME_HEIGHT } from "./GameConstants.js";

console.log("bitch");
//instantiate the class Engine once.
const gameEngine = new Engine(document.getElementById("app"));
//pass the game root to the Canvas.
const newCanvas = new Canvas(
  "gameCanvas",
  document.getElementById("app"),
  GAME_WIDTH,
  GAME_HEIGHT
);

newCanvas.create();
