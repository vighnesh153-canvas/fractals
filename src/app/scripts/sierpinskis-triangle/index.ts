import { Program } from './Program';
import { animationStart, animationStop } from '../common';

export const animate = (canvasElement: HTMLCanvasElement) => {
  animationStart(Program, canvasElement);
};

export const stop = animationStop;
