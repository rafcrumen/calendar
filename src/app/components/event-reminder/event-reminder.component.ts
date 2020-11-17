import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Reminder, ReminderImpl } from 'src/app/Model/reminder-model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-event-reminder',
  templateUrl: './event-reminder.component.html',
  styleUrls: ['./event-reminder.component.css']
})
export class EventReminderComponent implements OnInit, AfterViewInit {
  @Input() reminder: Reminder;
  @Output() onClose: EventEmitter<Reminder>;
  public form  = new FormGroup({
    id: new FormControl(""),
    city: new FormControl(""),
    date: new FormControl(""),
    time: new FormControl(""),
    subject: new FormControl(""),
    color: new FormControl(""),
    status: new FormControl("")
  });
  closeResult = '';
  selectingDate = false;
  constructor(private modalService: NgbModal, private cdr: ChangeDetectorRef) {
    this.onClose = new EventEmitter<Reminder>();
  }

  ngOnInit(): void {
    // if (this.id )
    // {
    //   this.GetById();
    // }
    this.initForm();
    //|this.cdr.detectChanges();
  }
  ngAfterViewInit() {
  }
  initForm(): void {
    if (!this.reminder){
      let dateToday = new Date();
      this.reminder = new ReminderImpl(null, 
                                       new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate()),
                                        '','','','','N');      
    }
    this.patchFrom();
  }     
  patchFrom(){
    this.form.controls.id.patchValue(this.reminder.id);
    this.form.controls.date.patchValue(`${this.reminder.date.getFullYear()}/${this.reminder.date.getMonth()+1}/${this.reminder.date.getDate()}`);
    this.form.controls.time.patchValue(this.reminder.time);
    this.form.controls.subject.patchValue(this.reminder.subject);
    this.form.controls.city.patchValue(this.reminder.city);
    this.form.controls.color.patchValue(this.reminder.color);
    this.form.controls.status.patchValue(this.reminder.status);
  }
  
  save() { 
    this.form.controls.date.patchValue(new Date(this.form.controls.date.value)); 
    console.log(this.form.controls.date);
    this.modalService.dismissAll(this.form.value);
  }
  close(reason){
    this.modalService.dismissAll(null);
  }  
  dismiss(message)
  {
    this.modalService.dismissAll(null);
  }
  pickaDay(): void {
    this.selectingDate= true;
    // this.modalService.open(pickdaycalendar, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.form.controls.date = result;
    //   this.modalService.dismissAll();
    // }, (reason) => {
    //   this.modalService.dismissAll();
    // });
  }  
  selectedDate(dateSelected){
    console.log(dateSelected);
    this.reminder.date = dateSelected;
    this.form.controls.date.patchValue(`${this.reminder.date.getFullYear()}/${this.reminder.date.getMonth()+1}/${this.reminder.date.getDate()}`);
    this.selectingDate = false;
  }
}
