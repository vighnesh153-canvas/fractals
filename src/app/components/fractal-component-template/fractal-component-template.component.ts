import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-fractal-component-template',
  templateUrl: './fractal-component-template.component.html',
  styleUrls: ['./fractal-component-template.component.scss']
})
export class FractalComponentTemplateComponent implements OnInit, OnDestroy {
  displayButton = false;
  animationRunning = false;

  @Input() animateFunction: (canvasElement: HTMLCanvasElement) => void;
  @Input() stopAnimationFunction: () => void;

  @Input() title = 'Title';
  @ViewChild('canvas', { static: true })  // static: true, to use in ngOnInit
  canvasElement: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngOnInit(): void {
    this.displayButton = true;
  }

  toggleAnimation() {
    if (this.animationRunning === false) {
      this.animateFunction(this.canvasElement.nativeElement);
    } else {
      this.stopAnimationFunction();
    }

    this.animationRunning = !this.animationRunning;
  }

  ngOnDestroy(): void {
    this.stopAnimationFunction();
  }

}
