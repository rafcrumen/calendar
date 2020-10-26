import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickabelDayCalendarComponent } from './pickabel-day-calendar.component';

describe('PickabelDayCalendarComponent', () => {
  let component: PickabelDayCalendarComponent;
  let fixture: ComponentFixture<PickabelDayCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickabelDayCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickabelDayCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
