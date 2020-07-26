import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Casa } from 'src/app/models/casa';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print-casa',
  templateUrl: './print-casa.component.html',
  styleUrls: ['./print-casa.component.css']
})
export class PrintCasaComponent implements OnInit {
  myForm1: Casa;
  key = '';
  constructor(
    public toastr: ToastrService,
    public Api: ApiService,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.key = this.actRouter.snapshot.paramMap.get('key');
    this.Api.GetCurrentCasa(this.key).valueChanges().subscribe(data => {
      this.myForm1 = data;
    });
  }

}
