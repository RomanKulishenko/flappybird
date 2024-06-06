import Background from "./background.js";
import Control from "./control.js";
import Pipes from "./pipes.js";
import Foreground from "./foreground.js";
import Bird from "./bird.js";
import ReadyImage from "./readyImage.js";
import GameOver from "./gameOver.js";
import Score from "./score.js";

class Game {
  constructor() {
    this.control = new Control();
    this.pipes = new Pipes();
    this.foreground = new Foreground();
    this.bird = new Bird();
    this.readyImage = new ReadyImage();
    this.gameOver = new GameOver();
    this.score = new Score();
  }

  draw() {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    Background.draw(ctx, sprite, canvas);
    this.pipes.draw();
    this.foreground.draw();
    this.bird.draw();
    this.readyImage.draw();
    this.gameOver.draw();
    this.score.draw();
  }

  update() {
    this.bird.update(this.foreground);
    this.foreground.update();
    this.pipes.update(this.bird, this.score);
  }

  loop() {
    this.update();
    this.draw();
    frames++;

    requestAnimationFrame(this.loop.bind(this));
  }

  startGame = (event) => {
    this.control.start(event, this.bird, this.pipes, this.score);
  };
}

export default Game;
