import { Component, Inject, OnInit } from '@angular/core';
import fechaObj from 'fecha';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {
  save = 2;
  myForm: FormGroup;
  public fecha = '';
  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    public Api: ApiService,
    public dialogRef: MatDialogRef<NewRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.fecha = fechaObj.format(new Date(), 'YYYY[/]MM[/]D');
    this.sForm();
    this.Api.GetFormsList();
    this.myForm.patchValue({fecha: this.fecha});
  }

  sForm() {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      curp: [''],
      tel: [''],
      fecha: [''],
      credito: [''],
      mcredito: [''],
      observaciones: [''],
      estado: [false],
      llamadas: [],
      nCalls: [0]
    });
  }

  ResetForm() {
    this.myForm.reset();
  }

  submitSurveyData = () => {
    this.Api.AddForm(this.myForm.value);
    this.toastr.success('Guardado!');
    this.ResetForm();
  }

  close() {
    this.dialogRef.close(this.myForm);
  }
}
