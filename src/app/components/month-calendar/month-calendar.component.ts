import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DayCalendar, DayCalendarImpl } from 'src/app/Model/day-calendar.model';
import { Reminder, ReminderImpl } from 'src/app/Model/reminder-model';

@Component({
  selector: 'app-month-calendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.css']
})
export class MonthCalendarComponent implements OnInit {

  constructor(private modalService: NgbModal) { 
    this.reminders = new Array<Reminder>();
  }
  weeks: Array<Array<DayCalendar>>;
  reminders: Array<Reminder>;
  currentDate = new Date();
  currentReminder: Reminder;
  months = [0,1,2,3,4,5,6,7,8,9,10,11];
  weekDayNames = ["Domingo", "Lúnes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  closeResult = '';  
  
  ngOnInit(): void {
    this.currentDate = new Date();
    this.reminders = new Array<Reminder>();
    this.fillWeeks();
  } 

  remindersOfDate (date: Date): Reminder[]{
    let dayReminders = new Array<Reminder>();
    for(let r of this.reminders){
      if (r.date && 
          r.date.getDate() === date.getDate() &&
          r.date.getMonth() === date.getMonth() &&
          r.date.getFullYear() === date.getFullYear() ){
        dayReminders.push(r);
        }
    }    
    dayReminders = dayReminders.sort((e1, e2) => {
        if (e1.time < e2.time){
          return -1;
        } 
        if (e2.time < e1.time){
          return 1;
        } 
        return 0;
    });
    return dayReminders;    return dayReminders;
  }
  addReminder(date2Set, content){
    this.currentReminder = new ReminderImpl(null, date2Set, '00:00', '', '', '#ffffff', 'N');
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      this.close(reason);
    });    
  }
  editReminder(reminder, content){
    this.currentReminder = reminder;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      this.close(reason);
    });    

  }
  close(data: Reminder): void {
    if (data){
        let reminder = this.reminders.filter(r => r.id == data.id);
        if (reminder.length > 0) {
          this.reminders.map((reminder, index) => {
            if (reminder.id == data .id){
               this.reminders[index] = data;
             }
            });    
            } else {
            this.reminders.push(data);
          }
          this.modalService.dismissAll();
    }  
  }
  fillWeeks() {
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
        if (this.currentDate.getDate() == calendarDay.getDate() &&
            this.currentDate.getMonth() == calendarDay.getMonth() &&
            this.currentDate.getFullYear() == calendarDay.getFullYear()){
            daysOfWeek.push(new DayCalendarImpl(new Date(calendarDay), 2));
            } else {
            daysOfWeek.push(new DayCalendarImpl(new Date(calendarDay), 0));
        }
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
