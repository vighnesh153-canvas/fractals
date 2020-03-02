import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-fractal-component-template',
  templateUrl: './fractal-component-template.component.html',
  styleUrls: ['./fractal-component-template.component.scss']
})
export class FractalComponentTemplateComponent implements OnInit {
  displayButton = false;
  animateFunction: (canvasElement: HTMLCanvasElement) => void;

  @Input() title = 'Title';
  @ViewChild('canvas') canvasElement: ElementRef<HTMLCanvasElement>;

  constructor() {
    import('src/app/scripts/barnsleys-fern/index')
      .then(({ animate }) => {
        this.displayButton = true;
        this.animateFunction = animate;
      });
  }

  ngOnInit(): void {
  }

  animate() {
    this.animateFunction(this.canvasElement.nativeElement);
  }

}
