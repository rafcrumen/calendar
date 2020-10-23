import { Time } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';

export interface Reminder {
date: Date;
time: Time;
city: string;
color: string;
status: string;
}

export class ReminderImpl implements Reminder {
    constructor(public date, public time, public city, public color, public status){
        this.date = date;
        this.time = time;
        this.city = city;
        this.color = color;
        this.status = status;
    }
}