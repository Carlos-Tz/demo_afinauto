import { Component, OnInit, Input, TemplateRef, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit {

  @ViewChild('modalC') modalC: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  backdrop: any;
  @Input() public casa: any;
  constructor() { }

  ngOnInit(): void {
    /* console.log(this.casa); */
  }

  showDialog(){
    const view = this.modalC.createEmbeddedView(null);
    this.vc.insert(view);
    this.modalC.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
    this.modalC.elementRef.nativeElement.previousElementSibling.classList.add('modal-open');
    this.modalC.elementRef.nativeElement.previousElementSibling.style.display = 'block';
    this.backdrop = document.createElement('DIV');
    this.backdrop.className = 'modal-backdrop';
    document.body.appendChild(this.backdrop);
  }

  closeDialog = () => {
    this.vc.clear();
    document.body.removeChild(this.backdrop);
  }
}
