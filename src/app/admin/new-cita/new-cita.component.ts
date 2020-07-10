import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Form } from 'src/app/models/form';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-cita',
  templateUrl: './new-cita.component.html',
  styleUrls: ['./new-cita.component.css']
})
export class NewCitaComponent implements OnInit {
  myForm1: FormGroup;
  /* key = ''; */
  title = '';
  @Input() public myForm: Form;
  @Input() public closeDialog: any;
  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    private actRouter: ActivatedRoute,
    public Api: ApiService
    ) { }

  ngOnInit(): void {
    this.title = 'Llamar a ' + this.myForm.nombre;
    this.sForm();
    /* this.key = this.actRouter.snapshot.paramMap.get('key'); */
    /* this.myForm1.patchValue({folio: this.folio}); */
  }

  sForm() {
    this.myForm1 = this.fb.group({
      title: [this.title, [Validators.required]],
      start: ['', [Validators.required]],
      color: [''],
      end: [''],
      description: ['']
    });
  }

  ResetForm() {
    this.myForm1.reset();
  }

  submitSurveyData = () => {
    this.Api.AddCita(this.myForm1.value);
    /* this.Api.UpdateLengthCalls(this.folio, this.key); */
    this.toastr.success('Cita agregada!');
    this.ResetForm();
    this.closeDialog();
  }
}
