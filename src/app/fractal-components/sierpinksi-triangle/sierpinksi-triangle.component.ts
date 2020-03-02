import { Component, OnInit } from '@angular/core';

import { animate, stop } from '../../scripts/sierpinskis-triangle';

@Component({
  selector: 'app-sierpinksi-triangle',
  templateUrl: './sierpinksi-triangle.component.html',
  styleUrls: [
    './sierpinksi-triangle.component.scss',
    '../../styles/common-component.scss'
  ]
})
export class SierpinksiTriangleComponent implements OnInit {
  animateFunc = animate;
  stopAnimationFunc = stop;

  constructor() { }

  ngOnInit(): void {
  }

}
