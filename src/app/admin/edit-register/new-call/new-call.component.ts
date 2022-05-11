import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Call } from 'src/app/models/call';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
/* import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; */

@Component({
  selector: 'app-new-call',
  templateUrl: './new-call.component.html',
  styleUrls: ['./new-call.component.css']
})
export class NewCallComponent implements OnInit {
  myForm1: FormGroup;
  key = '';
  @Input() public folio: number;
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
    this.myForm1.patchValue({folio: this.folio});
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
    //this.Api.AddCall(this.myForm1.value, this.key);
    //this.Api.UpdateLengthCalls(this.folio, this.key);
    this.toastr.success('Llamada agregada!');
    this.ResetForm();
    this.closeDialog();
  }
}
