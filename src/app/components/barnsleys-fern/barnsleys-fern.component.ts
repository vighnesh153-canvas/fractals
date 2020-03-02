import { Component, OnInit } from '@angular/core';

import { animate, stop } from '../../scripts/barnsleys-fern';

@Component({
  selector: 'app-barnsleys-fern',
  templateUrl: './barnsleys-fern.component.html',
  styleUrls: [
    './barnsleys-fern.component.scss',
    '../../styles/common-component.scss'
  ]
})
export class BarnsleysFernComponent implements OnInit {
  animateFunc = animate;
  stopAnimationFunc = stop;

  constructor() { }

  ngOnInit(): void {
  }

}
