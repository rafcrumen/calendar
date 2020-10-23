import { Time } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';

export interface Reminder {
id: string;
date: Date;
time: Time;
subject: string;
city: string;
color: string;
status: string;
}

export class ReminderImpl implements Reminder {
    constructor(public id, public date, public time, public subject,  public city, public color, public status){
        this.id = id;
        this.date = date;
        this.subject = subject;
        this.time = time;
        this.city = city;
        this.color = color;
        this.status = status;
    }
}