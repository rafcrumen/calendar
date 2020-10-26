export interface monthCalendar {
    reminders: Array<Reminder>;    
}
export class MonthCalendarImpl implements monthCalendar{
    constructor(public reminders){
        this.reminders = reminders;
    }
}