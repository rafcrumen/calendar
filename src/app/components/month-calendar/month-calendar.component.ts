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

  constructor(private modalService: NgbModal) { }
  weeks: Array<Array<DayCalendar>>;
  reminders: Array<Reminder>;
  currentDate = new Date();
  currentReminder: Reminder;
  months = [0,1,2,3,4,5,6,7,8,9,10,11];
  monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  closeResult = '';  
  ngOnInit(): void {
    this.currentDate = new Date();
    this.reminders = new Array<Reminder>();
    this.fillWeeks();
  } 
  addReminder(date2Set, content){
    this.currentReminder = new ReminderImpl(null, date2Set, '00:00', '', '', '#ffffff', 'N');
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.close(result);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.close(reason);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });    
  }
  close(data: Reminder): void {
    console.log("on Close: ", data);
    if (data){
      this.reminders.push(data);
    }
    this.modalService.dismissAll();
  }  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
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
        daysOfWeek.push(new DayCalendarImpl(new Date(calendarDay), 0));
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
