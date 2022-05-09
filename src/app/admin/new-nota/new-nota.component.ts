import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-nota',
  templateUrl: './new-nota.component.html',
  styleUrls: ['./new-nota.component.css']
})
export class NewNotaComponent implements OnInit {
  myForm: FormGroup;
  save = 2;


  constructor() { }

  ngOnInit(): void {
  }

  submitSurveyData = () => {
    /* this.formApi.AddForm(this.myForm.value);
    this.toastr.success('Guardado!');
    this.needleValue = 50;
    this.ResetForm();
    this.clear1();
    this.clear2();
    this.clear3();
    this.clear4();
    this.sForm2(); */
  }
}
