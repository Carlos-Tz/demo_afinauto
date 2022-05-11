import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-casa',
  templateUrl: './new-casa.component.html',
  styleUrls: ['./new-casa.component.css']
})
export class NewCasaComponent implements OnInit {
  myForm1: FormGroup;  
  @Input() public closeDialog: any;
  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    public Api: ApiService
    ) { }

  ngOnInit(): void {
    this.sForm();
  }

  sForm() {
    this.myForm1 = this.fb.group({
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      photo1: [''],
      photo2: [''],
      photo3: [''],
      photo4: [''],
      photo5: [''],
      photo6: [''],
      photo7: [''],
      photo8: [''],
      photo9: [''],
      photo10: [''],
      photo11: [''],
      photo12: ['']
    });
  }

  ResetForm() {
    this.myForm1.reset();
  }

  submitSurveyData = () => {
    //this.Api.AddCasa(this.myForm1.value);
    this.toastr.success('Propiedad agregada!');
    this.ResetForm();
    this.closeDialog();
  }

}
