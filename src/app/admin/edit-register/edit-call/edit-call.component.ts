import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-call',
  templateUrl: './edit-call.component.html',
  styleUrls: ['./edit-call.component.css']
})
export class EditCallComponent implements OnInit {
  myForm1: FormGroup;
  key = '';
  @Input() public key2: string;
  @Input() public closeDialog: any;
  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    private actRouter: ActivatedRoute,
    public Api: ApiService
    ) { }

  ngOnInit(): void {
    this.sForm();
    this.key = this.actRouter.snapshot.paramMap.get('key');
    /* this.Api.GetCurrentCall(this.key, this.key2).valueChanges().subscribe(data => {
      this.myForm1.patchValue(data);
    }); */
  }

  sForm() {
    this.myForm1 = this.fb.group({
      folio: ['', [Validators.required]],
      texto: ['', [Validators.required]],
      fecha: ['', [Validators.required]]
    });
  }

  ResetForm() {
    this.myForm1.reset();
  }

  submitSurveyData = () => {
    //this.Api.UpdateCall(this.myForm1.value);
    /* this.Api.UpdateLengthCalls(this.folio, this.key); */
    this.toastr.success('Guardado!');
    /* this.ResetForm(); */
    this.closeDialog();
  }
}
