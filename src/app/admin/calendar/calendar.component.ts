import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  @Input() eventData: any[];
  calendarOptions: CalendarOptions;

  constructor() {
    this.eventData = [
      {
        title: 'event1',
        start: moment()
      },
      {
        title: 'event2',
        start: moment(),
        end: moment().add(2, 'days')
      },
      {
        title: 'my event',
        start: '2020-07-07'
      }
    ];
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: 'es',
      buttonText: {
        today: 'Hoy'
      },
      editable: true,
      selectable: true,
      events: this.eventData
    };
    /* titleFormat: 'MMM D YYYY',
    firstDay: 1, */
  }


  ngOnInit(): void {
    console.log(moment().date());
  }

}
