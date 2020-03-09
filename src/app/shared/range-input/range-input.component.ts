import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss']
})
export class RangeInputComponent implements OnInit {
  @Input() title = 'Title';
  @Input() note = 'This is a note.';

  @Input() min = 0;
  @Input() max = 2 * Math.PI;
  @Input() step = 0.01;
  @Input() value = Math.PI / 4;

  @Output() valueEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.valueEmitter.emit(this.value);
  }

  onValueChange() {
    this.valueEmitter.emit(this.value);
  }

}
