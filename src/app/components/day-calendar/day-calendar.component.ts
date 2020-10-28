import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DayCalendar, DayCalendarImpl } from 'src/app/Model/day-calendar.model';
import { Reminder } from 'src/app/Model/reminder-model';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.css']
})
export class DayCalendarComponent  {

  @Input() dayCalendar: DayCalendar;
  @Input() reminders: Array<Reminder>;
  @Output() onSelectedDate: EventEmitter<Date>;
  @Output() onSelectedReminder: EventEmitter<Reminder>;
  currentIndex = 0;
  constructor() { 
    this.onSelectedDate = new EventEmitter<Date>();
    this.onSelectedReminder = new EventEmitter<Reminder>();
  }
  addReminder() {
    this.onSelectedDate.emit(this.dayCalendar.day);
  }
  editReminder(reminder){
    this.onSelectedReminder.emit(reminder);
  }
  nextIndex(){
    if (this.reminders && this.reminders.length > this.currentIndex+1){
        this.currentIndex++;
    } else{
      this.currentIndex = 0;
    }
  }
  previousIndex(){
    if (this.reminders && this.currentIndex > 0){
        this.currentIndex--;
    } else {
      this.currentIndex = this.reminders.length-1;
    }
  }
}
