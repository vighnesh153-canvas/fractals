import {
  Component,
  ElementRef,
  OnInit
} from '@angular/core';
import { HilbertCurveLogic } from './hilbert-curve.logic';

@Component({
  selector: 'app-hilbert-curve',
  templateUrl: './hilbert-curve.component.html',
  styleUrls: [
    './hilbert-curve.component.scss',
    '../../styles/common-component.scss'
  ]
})
export class HilbertCurveComponent implements OnInit {
  canvasElement: ElementRef<HTMLCanvasElement>;
  animateInterval;

  displayDataSection: boolean;

  orderOfCurve: number;

  constructor() { }

  ngOnInit(): void {
  }

  isCanvasDisplayed(value: boolean) {
    this.displayDataSection = value;
  }

  changeInValue(value: number) {
    this.orderOfCurve = value;
    this.animationStop();
  }

  receiveElement(e: ElementRef<HTMLCanvasElement>) {
    this.canvasElement = e;
  }

  animationStart() {
    const program = new HilbertCurveLogic(
      this.canvasElement.nativeElement, this.orderOfCurve, this.animationStop
    );
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
