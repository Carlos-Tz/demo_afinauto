import { Component, OnInit, Input, ViewContainerRef, TemplateRef, ViewChild } from '@angular/core';
import { Call } from 'src/app/models/call';

@Component({
  selector: 'app-btn-call',
  templateUrl: './btn-call.component.html',
  styleUrls: ['./btn-call.component.css']
})
export class BtnCallComponent implements OnInit {

  @Input() public call: any;
  @ViewChild('modalE') modalE: TemplateRef<any>;
  @ViewChild('vcE', {read: ViewContainerRef}) vcE: ViewContainerRef;
  backdrop: any;
  constructor() { }

  ngOnInit(): void {
  }

  showDialog(){
    const view = this.modalE.createEmbeddedView(null);
    this.vcE.insert(view);
    this.modalE.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
    this.modalE.elementRef.nativeElement.previousElementSibling.classList.add('modal-open');
    this.modalE.elementRef.nativeElement.previousElementSibling.style.display = 'block';
    this.backdrop = document.createElement('DIV');
    this.backdrop.className = 'modal-backdrop';
    document.body.appendChild(this.backdrop);
  }

  closeDialog = () => {
    this.vcE.clear();
    document.body.removeChild(this.backdrop);
  }

}
