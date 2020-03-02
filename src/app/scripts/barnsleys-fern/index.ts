import { Canvas } from '../Canvas';

export const animate = (canvasElement: HTMLCanvasElement) => {
  const canvas = new Canvas(canvasElement);
  canvas.drawFilledRect(0, 0, canvas.width, canvas.height, 'black');
  const offset = 3;
  canvas.drawFilledRect(
    canvas.width - offset, canvas.height - offset,
    offset, offset, 'yellow'
  );
};
