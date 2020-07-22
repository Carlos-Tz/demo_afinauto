import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-new-casa',
  templateUrl: './new-casa.component.html',
  styleUrls: ['./new-casa.component.css']
})
export class NewCasaComponent implements OnInit {
  myForm1: FormGroup;
  uploadedImage: Blob;
  @Input() public closeDialog: any;
  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    public Api: ApiService,
    private ng2ImgMax: Ng2ImgMaxService,
    public sanitizer: DomSanitizer
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
    this.Api.AddCasa(this.myForm1.value);
    this.toastr.success('Propiedad agregada!');
    this.ResetForm();
    this.closeDialog();
  }

  changeListener($event): void {
    this.readThis($event.target);
    //console.log($event.target.name);
  }

  readThis(inputValue: any): void {
    const ima = inputValue.files[0];
    this.ng2ImgMax.resizeImage(ima, 400, 400).subscribe(
      result => {
        this.uploadedImage = result;
        const myReader: FileReader = new FileReader();
        myReader.readAsDataURL(this.uploadedImage);
        myReader.onload = (e) => {
          if (inputValue.name == 'img1') {
            /* this.form_.img1 = <string>myReader.result; */
          }
          /* if (inputValue.name == 'img2') {
            this.form_.img2 = <string>myReader.result;
          }
          if (inputValue.name == 'img3') {
            this.form_.img3 = <string>myReader.result;
          }
          if (inputValue.name == 'img4') {
            this.form_.img4 = <string>myReader.result;
          }
          if (inputValue.name == 'img5') {
            this.form_.img5 = <string>myReader.result;
          }
          if (inputValue.name == 'img6') {
            this.form_.img6 = <string>myReader.result;
          }
          if (inputValue.name == 'img7') {
            this.form_.img7 = <string>myReader.result;
          }
          if (inputValue.name == 'img8') {
            this.form_.img8 = <string>myReader.result;
          } */
          // this.logo = <string>myReader.result;
          this.toastr.success('Imagen cargada correctamente!');
        };
      },
      error => {
        this.toastr.error('Imagen invalida!');
      }
    );
  }

}
