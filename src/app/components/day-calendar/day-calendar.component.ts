import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Reminder } from 'src/app/Model/reminder-model';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.css']
})
export class DayCalendarComponent implements OnInit, AfterViewInit {

  constructor() { }
  @Input() date: Date;
  @Input() reminders: Array<Reminder>;

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    console.log(this.date);
  }

}
