import {
  Component,
  ElementRef,
  OnInit
} from '@angular/core';
import { SymmetricBinaryTreeLogic } from './symmetric-binary-tree.logic';

@Component({
  selector: 'app-symmetric-binary-tree',
  templateUrl: './symmetric-binary-tree.component.html',
  styleUrls: [
    './symmetric-binary-tree.component.scss',
    '../../styles/common-component.scss'
  ]
})
export class SymmetricBinaryTreeComponent implements OnInit {
  canvasElement: ElementRef<HTMLCanvasElement>;
  animateInterval;

  displayDataSection: boolean;

  angle: number;
  branchLengthScaleDownFactor: number;
  initialBranchLength: number;

  constructor() { }

  ngOnInit(): void {
  }

  isCanvasDisplayed(value: boolean) {
    this.displayDataSection = value;
  }

  onAngleChange(value: number) {
    this.angle = value;
    this.animationStart();
  }

  onBranchLengthScaleDownFactorChange(value: number) {
    this.branchLengthScaleDownFactor = value;
    this.animationStart();
  }

  onInitialBranchLengthChange(value: number) {
    this.initialBranchLength = value;
    this.animationStart();
  }

  receiveElement(e: ElementRef<HTMLCanvasElement>) {
    this.canvasElement = e;
    this.animationStart();
  }

  animationStart() {
    if (this.canvasElement) {
      const program = new SymmetricBinaryTreeLogic(
        this.canvasElement.nativeElement,
        this.angle, this.branchLengthScaleDownFactor,
        this.initialBranchLength,
        this.animationStop.bind(this)
      );
      program.plot();
    }
  }

  animationStop() {
    if (this.animateInterval) {
      clearInterval(this.animateInterval);
      this.animateInterval = null;
    }
  }

}
