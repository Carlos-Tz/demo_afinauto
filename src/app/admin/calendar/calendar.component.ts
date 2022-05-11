import { Component, OnInit, ViewChild, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
/* import * as moment from 'moment'; */
import { ApiService } from 'src/app/services/api.service';
import { Cita } from 'src/app/models/cita';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  save = 2;
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  @ViewChild('modalE2') modalE2: TemplateRef<any>;
  @ViewChild('vcE2', {read: ViewContainerRef}) vcE2: ViewContainerRef;
  backdrop: any;
  calendarOptions: CalendarOptions;
  citas: Cita[];
  cita: any;

  constructor(
    public Api: ApiService,
  ) {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: 'es',
      buttonText: {
        today: 'Hoy'
      },
      editable: true,
      selectable: true,
      eventClick: (info) => {
        this.cita = info.event;
        /* console.log(this.cita.extendedProps + 'ddddd' + this.cita.startStr ); */
        this.showDialog();
      }
    };
  }


  ngOnInit(): void {    
    /* this.Api.GetCita().snapshotChanges().subscribe(re => {
      this.citas = [];
      re.forEach(item => {
        const cita = item.payload.toJSON();
        cita['$key'] = item.key;
        this.citas.push(cita as Cita);
      });
      if (this.citas) {
        this.calendarOptions.events = this.citas;
      }
    }); */
  }
  showDialog(){
    const view = this.modalE2.createEmbeddedView(null);
    this.vcE2.insert(view);
    this.modalE2.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
    this.modalE2.elementRef.nativeElement.previousElementSibling.classList.add('modal-open');
    this.modalE2.elementRef.nativeElement.previousElementSibling.style.display = 'block';
    this.backdrop = document.createElement('DIV');
    this.backdrop.className = 'modal-backdrop';
    document.body.appendChild(this.backdrop);
  }

  closeDialog = () => {
    this.vcE2.clear();
    document.body.removeChild(this.backdrop);
  }

  deleteData(key: string) {
    /* console.log('elminado'); */
    this.closeDialog();
    //this.Api.DeleteCita(key);
  }
}
