import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ModuloComponent } from './components/modulo/modulo.component';
import { ToMatrixPipe } from './toMatrix.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarReminderComponent } from '../app/components/calendar-reminder/calendar-reminder.component';
import { EventReminderComponent } from './components/event-reminder/event-reminder.component';
import { AddReminderButtonComponent } from './components/add-reminder-button/add-reminder-button.component';
import { MonthCalendarComponent } from './components/month-calendar/month-calendar.component';
import { DayCalendarComponent } from './components/day-calendar/day-calendar.component';
import { PickDayCalendarComponent } from './components/pick-day-calendar/pick-day-calendar.component';
import { PickabelDayCalendarComponent } from './components/pickabel-day-calendar/pickabel-day-calendar.component';
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ModuloComponent,
    ToMatrixPipe,
    CalendarReminderComponent,
    EventReminderComponent,
    AddReminderButtonComponent,
    MonthCalendarComponent,
    DayCalendarComponent,
    PickDayCalendarComponent,
    PickabelDayCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
