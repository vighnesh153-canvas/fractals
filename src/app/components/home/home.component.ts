import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { environment } from '../../../environments/environment';

import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  definitionAndMeaning: string;
  channelOf3Blue1Brown: string;

  fractalComponents: {
    title: string,
    link: string,
    image: string
  }[];

  constructor(private utilityService: UtilityService) {
    const { definitionAndMeaning, channelOf3Blue1Brown, components } =
      environment.fractals;

    this.definitionAndMeaning = definitionAndMeaning;
    this.channelOf3Blue1Brown = channelOf3Blue1Brown;

    this.fractalComponents = components;
  }

  ngOnInit(): void {
    this.utilityService.displayBackButton.next(false);
  }

  ngOnDestroy(): void {
    this.utilityService.displayBackButton.next(true);
  }

}
