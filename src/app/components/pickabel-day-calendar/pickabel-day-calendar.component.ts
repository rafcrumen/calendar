import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pickabel-day-calendar',
  templateUrl: './pickabel-day-calendar.component.html',
  styleUrls: ['./pickabel-day-calendar.component.css']
})
export class PickabelDayCalendarComponent implements OnInit {
  @Input() date: Date;
  @Output() onSelectedDay: EventEmitter<Date>;

  constructor() { }

  ngOnInit(): void {
  }
  selectedDay() {
    this.onSelectedDay.emit(this.date);
  }
}
