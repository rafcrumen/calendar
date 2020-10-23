import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-calendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.css']
})
export class MonthCalendarComponent implements OnInit {

  constructor() { }
  weeks: Array<Array<Date>>;
  currentDate = new Date();
  months = [0,1,2,3,4,5,6,7,8,9,10,11];
  monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  
  ngOnInit(): void {
    this.currentDate = new Date();
    this.fillWeeks();
  } 
  fillWeeks() {
    let currentMonth = this.currentDate.getMonth();
    let calendarDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    let nextMonth = currentMonth == 11 ? 0 : currentMonth + 1;
    this.weeks= new Array<Array<Date>>();
    while (calendarDay.getDay() > 0){
      calendarDay.setDate(calendarDay.getDate() -1);
    }
    let daysOfWeek = new Array<Date>();
    while(calendarDay.getMonth() != nextMonth){
      daysOfWeek = new Array<Date>();
      for(let day = 0; day < 7; day++){
        daysOfWeek.push(new Date(calendarDay));
        calendarDay.setDate(calendarDay.getDate() + 1);
        }
    this.weeks.push(daysOfWeek);
    }
  }
  cambiaFecha(value){
    this.currentDate.setMonth(this.currentDate.getMonth() + value);
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    this.fillWeeks();
  }
}
