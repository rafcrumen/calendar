import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickDayCalendarComponent } from './pick-day-calendar.component';

describe('PickDayCalendarComponent', () => {
  let component: PickDayCalendarComponent;
  let fixture: ComponentFixture<PickDayCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickDayCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickDayCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
