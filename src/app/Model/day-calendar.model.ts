const classList: string[][] = [['colday', 'colday-weekend'],
                               ['colday-selectable','colday-weekend-selectable'],
                               ['colday-current', 'colday-weekend-current'],
                               ['colday-selectable-current','colday-weekend-selectable-current']];
export interface DayCalendar {
    day: Date;
    isWeekend: boolean;
    cssClass: string;    
}
export class DayCalendarImpl implements DayCalendar {
    day: Date;
    isWeekend: boolean
    cssClass: string;
    constructor (public date, public displayMode){
        this.day = date;
        this.isWeekend = this.day.getDay() == 0 || this.day.getDay() == 6;

        if (this.isWeekend){
            this.cssClass = classList[this.displayMode][1]
        } else {
            this.cssClass = classList[this.displayMode][0]
        }
    }
}