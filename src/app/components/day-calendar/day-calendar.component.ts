import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reminder } from 'src/app/Model/reminder-model';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.css']
})
export class DayCalendarComponent implements OnInit, AfterViewInit {

  @Input() date: Date;
  @Input() reminders: Array<Reminder>;
  @Output() onAddReminder: EventEmitter<Date>;
  constructor() { 
    this.onAddReminder = new EventEmitter<Date>();
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
  }
  addReminder() {
    this.onAddReminder.emit(this.date);
  }

}
