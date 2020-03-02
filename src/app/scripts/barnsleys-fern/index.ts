import {Program} from './Program';

let animateInterval;

export const animate = (canvasElement: HTMLCanvasElement) => {
  const program = new Program(canvasElement);
  animateInterval = setInterval(() => {
    program.plot();
    program.update();
  }, 1);
};

export const stop = () => {
  if (animateInterval) {
    clearInterval(animateInterval);
    animateInterval = null;
  }
};
