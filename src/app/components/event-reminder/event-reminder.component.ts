import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Reminder } from 'src/app/Model/reminder-model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-event-reminder',
  templateUrl: './event-reminder.component.html',
  styleUrls: ['./event-reminder.component.css']
})
export class EventReminderComponent implements OnInit {
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
  constructor(private modal: NgbModal) {
    this.onClose = new EventEmitter<Reminder>();
  }

  ngOnInit(): void {
    // if (this.id )
    // {
    //   this.GetById();
    // }
  }
  initForm(): void {
    // this.form = new FormGroup({
    //   id: new FormControl(""),
    //   date: new FormControl(""),
    //   time: new FormControl(""),
    //   subject: new FormControl(),
    //   city: new FormControl(""),
    //   color: new FormControl(""),
    //   status: new FormControl("")
    // });
  }     
  save() {
    console.log(this.form.value);
    this.onClose.emit(this.form.value);
  }
  close(reason){
    this.onClose.emit(null);
  }
  dismiss(message)
  {
    this.onClose.emit(null);
  }  
}
