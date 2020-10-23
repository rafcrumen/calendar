import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Reminder } from 'src/app/Model/reminder-model';

@Component({
  selector: 'app-event-reminder',
  templateUrl: './event-reminder.component.html',
  styleUrls: ['./event-reminder.component.css']
})
export class EventReminderComponent implements OnInit {
  @Input() reminder: Reminder;
  closeResult = '';
  constructor(private modal: NgbModal) {}

  ngOnInit(): void {
  } 
  close(reason){}
  dismiss(message){}  
}
