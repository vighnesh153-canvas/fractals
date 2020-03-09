import {
  Component,
  ElementRef,
  OnInit
} from '@angular/core';

import { BarnsleysFernLogic } from './barnsleys-fern.logic';

@Component({
  selector: 'app-barnsleys-fern',
  templateUrl: './barnsleys-fern.component.html',
  styleUrls: [
    './barnsleys-fern.component.scss',
    '../../styles/common-component.scss'
  ]
})
export class BarnsleysFernComponent implements OnInit {
  canvasElement: ElementRef<HTMLCanvasElement>;
  animateInterval;

  constructor() { }

  ngOnInit(): void {
  }

  receiveElement(e: ElementRef<HTMLCanvasElement>) {
    this.canvasElement = e;
  }

  animationStart() {
    const program = new BarnsleysFernLogic(this.canvasElement.nativeElement);
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
