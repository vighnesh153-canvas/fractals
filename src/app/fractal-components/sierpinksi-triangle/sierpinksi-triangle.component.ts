import {
  Component,
  ElementRef,
  OnInit
} from '@angular/core';

import { SierpinskiTriangleLogic } from './sierpinski-triangle.logic';

@Component({
  selector: 'app-sierpinksi-triangle',
  templateUrl: './sierpinksi-triangle.component.html',
  styleUrls: [
    './sierpinksi-triangle.component.scss',
    '../../styles/common-component.scss'
  ]
})
export class SierpinksiTriangleComponent implements OnInit {
  canvasElement: ElementRef<HTMLCanvasElement>;
  animateInterval;

  constructor() { }

  ngOnInit(): void {
  }

  receiveElement(e: ElementRef<HTMLCanvasElement>) {
    this.canvasElement = e;
  }

  animationStart() {
    const program = new SierpinskiTriangleLogic(this.canvasElement.nativeElement);
    this.animateInterval = setInterval(() => {
      program.plot();
      program.update();
    }, 1);
  }

  animationStop() {
    if (this.animateInterval) {
      clearInterval(this.animateInterval);
      this.animateInterval = null;
    }
  }

}
