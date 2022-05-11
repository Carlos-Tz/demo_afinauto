import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { Casa } from 'src/app/models/casa';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  save = 2;
  casas: Casa[];
  @ViewChild('modalC') modalC: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  backdrop: any;
  public dataSource = new MatTableDataSource<Casa>();
  displayedColumns: any[] = [
    'title'
  ];
  constructor(
    public toastr: ToastrService,
    public Api: ApiService
  ) { }

  ngOnInit() {
    /* this.Api.GetCasas().snapshotChanges().subscribe(re => {
      this.casas = [];
      re.forEach(item => {
        const casa = item.payload.toJSON();
        casa['$key'] = item.key;
        this.casas.push(casa as Casa);
      });
      if (this.casas.length > 0) {
        ///* this.data = true;
        this.dataSource.data = this.casas.slice();
      }
      // Pagination 
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    }); */
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

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
