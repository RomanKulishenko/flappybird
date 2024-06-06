import Game from "./classes/game.js";

const game = new Game();
canvas.addEventListener("click", game.startGame);
game.loop();
