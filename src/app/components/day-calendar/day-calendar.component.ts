import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DayCalendar, DayCalendarImpl } from 'src/app/Model/day-calendar.model';
import { Reminder } from 'src/app/Model/reminder-model';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.css']
})
export class DayCalendarComponent implements OnInit, AfterViewInit {

  @Input() dayCalendar: DayCalendar;
  @Input() reminders: Array<Reminder>;
  @Output() onSelectedDate: EventEmitter<Date>;
  constructor() { 
    this.onSelectedDate = new EventEmitter<Date>();
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    // if (this.dayCalendar){
    //   this.dayCalendar = new DayCalendarImpl(new Date() ,1);
    // }
  }
  addReminder() {
    this.onSelectedDate.emit(this.dayCalendar.day);
  }
}
