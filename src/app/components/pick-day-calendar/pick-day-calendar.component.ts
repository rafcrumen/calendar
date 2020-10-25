import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DayCalendar, DayCalendarImpl } from 'src/app/Model/day-calendar.model';
import { DayCalendarComponent } from '../day-calendar/day-calendar.component';

@Component({
  selector: 'app-pick-day-calendar',
  templateUrl: './pick-day-calendar.component.html',
  styleUrls: ['./pick-day-calendar.component.css']
})
export class PickDayCalendarComponent implements OnInit, AfterViewInit {
  @Input() currentDate: Date;
  @Output() onSelectedDate: EventEmitter<Date>;
  selectedDate: Date;
  monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  years: Array<number>;
  constructor() { 
    this.onSelectedDate = new  EventEmitter<Date>();
  }
  weeks: Array<Array<DayCalendar>>;
  public form  = new FormGroup({
    month: new FormControl(""),
    day: new FormControl(""),
    year: new FormControl("")
  });

  ngOnInit(): void {
    this.fillWeeks();
    this.fillYears();
    this.patchForm();
  }
  ngAfterViewInit(){
  }
  close(reason){
  }  
  dismiss(message)
  {
  }
  patchForm(){
    this.form.controls.month.patchValue(this.monthNames[this.currentDate.getMonth()]);
    this.form.controls.year.patchValue(this.currentDate.getFullYear());
    this.form.controls.day.patchValue(this.currentDate.getDate());
  }  
  fillYears(){
    this.years = new Array<number>();
    for (let index = 0; index < 10; index++) {
      this.years.push((this.currentDate.getFullYear() + index));
    }
  }

  fillWeeks() {
    if (!this.currentDate){
      let dateToday = new Date();
      this.currentDate = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate());
    }
    this.selectedDate = this.currentDate;
    let currentMonth = this.currentDate.getMonth();
    let calendarDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    let nextMonth = currentMonth == 11 ? 0 : currentMonth + 1;
    this.weeks= new Array<Array<DayCalendar>>();
    while (calendarDay.getDay() > 0){
      calendarDay.setDate(calendarDay.getDate() -1);
    }
    let daysOfWeek = new Array<DayCalendar>();
    while(calendarDay.getMonth() != nextMonth){
      daysOfWeek = new Array<DayCalendar>();
      for(let day = 0; day < 7; day++){
        if (this.currentDate == calendarDay){
          console.log(this.currentDate, calendarDay);
        }
        daysOfWeek.push(new DayCalendarImpl(new Date(calendarDay), this.currentDate == calendarDay ? 1 : 3));
        calendarDay.setDate(calendarDay.getDate() + 1);
        }
    this.weeks.push(daysOfWeek);
    }
  }
  selectedDay(seletedDate): void{
    console.log(seletedDate);
    this.onSelectedDate.emit(seletedDate);
    this.currentDate.setDate(seletedDate);
  }
  cambiaFecha(value){
    console.log(this.currentDate);
    this.currentDate.setMonth(this.currentDate.getMonth() + value);
    console.log(this.currentDate);
    this.patchForm();    
    this.fillWeeks();
    //this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());
  }
}
