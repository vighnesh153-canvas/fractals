import { Canvas } from '../../scripts/Canvas';
import { Fern } from './Fern';

export class BarnsleysFernLogic {
  fern = new Fern();
  canvas: Canvas;

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvas = new Canvas(canvasElement);
    // Draw background
    this.canvas.drawFilledRect(
      0, 0, this.canvas.width, this.canvas.height, 'black'
    );
  }

  plot() {
    const { X, Y } = this.fern;

    // transform and scale
    const plotX = (this.canvas.width * X / 6) + 250;
    const plotY = (this.canvas.height - 20) * (1 - Y / 10) + 10;

    this.canvas.drawFilledCircle(plotX, plotY, 1, 'green');
  }

  update() {
    this.fern.generateNext();
  }
}
