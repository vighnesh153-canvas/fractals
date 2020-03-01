import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarnsleysFernComponent } from './barnsleys-fern.component';

describe('BarnsleysFernComponent', () => {
  let component: BarnsleysFernComponent;
  let fixture: ComponentFixture<BarnsleysFernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarnsleysFernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarnsleysFernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
