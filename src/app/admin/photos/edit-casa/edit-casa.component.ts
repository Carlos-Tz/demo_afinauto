import { Component, OnInit, Input, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
/* import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser'; */
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-casa',
  templateUrl: './edit-casa.component.html',
  styleUrls: ['./edit-casa.component.css']
})
export class EditCasaComponent implements OnInit {

  @ViewChild('modalCi') modalCi: TemplateRef<any>;
  @ViewChild('vci', {read: ViewContainerRef}) vci: ViewContainerRef;
  backdrop: any;
  myForm1: FormGroup;
  acImg = '';
  @Input() public closeDialog: any;
  @Input() public key: string;
  uploadedImage: Blob;
  public filePathI1 = '';
  public filePathI2 = '';
  public filePathI3 = '';
  public filePathI4 = '';
  public filePathI5 = '';
  public filePathI6 = '';
  public filePathI7 = '';
  public filePathI8 = '';
  public filePathI9 = '';
  public filePathI10 = '';
  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    private storage: AngularFireStorage,
    public Api: ApiService
    /* private ng2ImgMax: Ng2ImgMaxService, */
    /* public sanitizer: DomSanitizer */
  ) { }

  ngOnInit(): void {
    this.sForm();
    this.Api.GetCurrentCasa(this.key).valueChanges().subscribe(data => {
      this.myForm1.patchValue(data);
    });
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
    this.Api.UpdateCasa(this.myForm1.value);
    this.toastr.success('Guardado!');
    this.closeDialog();
  }

  showImg(url: string){
    const view = this.modalCi.createEmbeddedView(null);
    this.vci.insert(view);
    this.modalCi.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
    this.modalCi.elementRef.nativeElement.previousElementSibling.classList.add('modal-open');
    this.modalCi.elementRef.nativeElement.previousElementSibling.style.display = 'block';
    this.backdrop = document.createElement('DIV');
    this.backdrop.className = 'modal-backdrop';
    document.body.appendChild(this.backdrop);
    this.acImg = url;
  }

  closeImg = () => {
    this.vci.clear();
    document.body.removeChild(this.backdrop);
  }

  changeListener($event): void {
    this.readThis($event.target);
    // console.log($event.target.name);
  }

  readThis(inputValue: any): void {
    const ima = inputValue.files[0];
    const reader = new FileReader();
    if (ima) {
      reader.readAsDataURL(ima);
    }

    reader.onloadend = () => {
      const imgURL = reader.result as string;
      const block = imgURL.split(';');
      const contentType = block[0].split(':')[1];
      const realData = block[1].split(',')[1];
      this.uploadedImage = this.b64toBlob(realData, contentType);
      if (inputValue.name === 'img1') {
        if (this.filePathI1 !== '') {
          const ref = this.storage.ref(this.filePathI1);
          ref.delete();
        }
        this.filePathI1 = `images_virami/image_${Date.now()}`;
        /* console.log(this.filePathI1); */
        const fileRef = this.storage.ref(this.filePathI1);
        this.storage.upload(this.filePathI1, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm1.patchValue({ photo1: url });
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
      if (inputValue.name === 'img2') {
        if (this.filePathI2 !== '') {
          const ref = this.storage.ref(this.filePathI2);
          ref.delete();
        }
        this.filePathI2 = `images_virami/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI2);
        this.storage.upload(this.filePathI2, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm1.patchValue({ photo2: url });
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
      if (inputValue.name === 'img3') {
        if (this.filePathI3 !== '') {
          const ref = this.storage.ref(this.filePathI3);
          ref.delete();
        }
        this.filePathI3 = `images_virami/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI3);
        this.storage.upload(this.filePathI3, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm1.patchValue({ photo3: url });
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
      if (inputValue.name === 'img4') {
        if (this.filePathI4 !== '') {
          const ref = this.storage.ref(this.filePathI4);
          ref.delete();
        }
        this.filePathI4 = `images_virami/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI4);
        this.storage.upload(this.filePathI4, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm1.patchValue({ photo4: url });
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
      if (inputValue.name === 'img5') {
        if (this.filePathI5 !== '') {
          const ref = this.storage.ref(this.filePathI5);
          ref.delete();
        }
        this.filePathI5 = `images_virami/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI5);
        this.storage.upload(this.filePathI5, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm1.patchValue({ photo5: url });
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
      if (inputValue.name === 'img6') {
        if (this.filePathI6 !== '') {
          const ref = this.storage.ref(this.filePathI6);
          ref.delete();
        }
        this.filePathI6 = `images_virami/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI6);
        this.storage.upload(this.filePathI6, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm1.patchValue({ photo6: url });
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
      if (inputValue.name === 'img7') {
        if (this.filePathI7 !== '') {
          const ref = this.storage.ref(this.filePathI7);
          ref.delete();
        }
        this.filePathI7 = `images_virami/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI7);
        this.storage.upload(this.filePathI7, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm1.patchValue({ photo7: url });
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
      if (inputValue.name === 'img8') {
        if (this.filePathI8 !== '') {
          const ref = this.storage.ref(this.filePathI8);
          ref.delete();
        }
        this.filePathI8 = `images_virami/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI8);
        this.storage.upload(this.filePathI8, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm1.patchValue({ photo8: url });
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
      if (inputValue.name === 'img9') {
        if (this.filePathI9 !== '') {
          const ref = this.storage.ref(this.filePathI9);
          ref.delete();
        }
        this.filePathI9 = `images_virami/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI9);
        this.storage.upload(this.filePathI9, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm1.patchValue({ photo9: url });
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
      if (inputValue.name === 'img10') {
        if (this.filePathI10 !== '') {
          const ref = this.storage.ref(this.filePathI10);
          ref.delete();
        }
        this.filePathI10 = `images_virami/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI10);
        this.storage.upload(this.filePathI10, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm1.patchValue({ photo10: url });
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
    };

  }
  b64toBlob(b64Data, contentType, sliceSize?) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  deleteCasa() {
    if (window.confirm('¿Esta seguro de eliminar el registro seleccionado?')) {
      if (this.myForm1.get('photo1').value && this.myForm1.get('photo1').value.startsWith('https://firebasestorage') ) {
        console.log(this.myForm1.get('photo1').value);
        const f1 = this.myForm1.get('photo1').value.split('image_')[1];
        const nf1 = f1.slice(0, 13);
        const ref = this.storage.ref(`images_virami/image_${nf1}`);
        ref.delete();
      }
      if (this.myForm1.get('photo2').value && this.myForm1.get('photo2').value.startsWith('https://firebasestorage') ) {
        const f1 = this.myForm1.get('photo2').value.split('image_')[1];
        const nf1 = f1.slice(0, 13);
        const ref = this.storage.ref(`images_virami/image_${nf1}`);
        ref.delete();
      }
      if (this.myForm1.get('photo3').value && this.myForm1.get('photo3').value.startsWith('https://firebasestorage') ) {
        const f1 = this.myForm1.get('photo3').value.split('image_')[1];
        const nf1 = f1.slice(0, 13);
        const ref = this.storage.ref(`images_virami/image_${nf1}`);
        ref.delete();
      }
      if (this.myForm1.get('photo4').value && this.myForm1.get('photo4').value.startsWith('https://firebasestorage') ) {
        const f1 = this.myForm1.get('photo4').value.split('image_')[1];
        const nf1 = f1.slice(0, 13);
        const ref = this.storage.ref(`images_virami/image_${nf1}`);
        ref.delete();
      }
      if (this.myForm1.get('photo5').value && this.myForm1.get('photo5').value.startsWith('https://firebasestorage') ) {
        const f1 = this.myForm1.get('photo5').value.split('image_')[1];
        const nf1 = f1.slice(0, 13);
        const ref = this.storage.ref(`images_virami/image_${nf1}`);
        ref.delete();
      }
      if (this.myForm1.get('photo6').value && this.myForm1.get('photo6').value.startsWith('https://firebasestorage') ) {
        const f1 = this.myForm1.get('photo6').value.split('image_')[1];
        const nf1 = f1.slice(0, 13);
        const ref = this.storage.ref(`images_virami/image_${nf1}`);
        ref.delete();
      }
      if (this.myForm1.get('photo7').value && this.myForm1.get('photo7').value.startsWith('https://firebasestorage') ) {
        const f1 = this.myForm1.get('photo7').value.split('image_')[1];
        const nf1 = f1.slice(0, 13);
        const ref = this.storage.ref(`images_virami/image_${nf1}`);
        ref.delete();
      }
      if (this.myForm1.get('photo8').value && this.myForm1.get('photo8').value.startsWith('https://firebasestorage') ) {
        const f1 = this.myForm1.get('photo8').value.split('image_')[1];
        const nf1 = f1.slice(0, 13);
        const ref = this.storage.ref(`images_virami/image_${nf1}`);
        ref.delete();
      }
      if (this.myForm1.get('photo9').value && this.myForm1.get('photo9').value.startsWith('https://firebasestorage') ) {
        const f1 = this.myForm1.get('photo9').value.split('image_')[1];
        const nf1 = f1.slice(0, 13);
        const ref = this.storage.ref(`images_virami/image_${nf1}`);
        ref.delete();
      }
      if (this.myForm1.get('photo10').value && this.myForm1.get('photo10').value.startsWith('https://firebasestorage') ) {
        const f1 = this.myForm1.get('photo10').value.split('image_')[1];
        const nf1 = f1.slice(0, 13);
        const ref = this.storage.ref(`images_virami/image_${nf1}`);
        ref.delete();
      }
      this.closeDialog();
      this.Api.DeleteCasa(this.key);

      /* this.data_ = false;
      this.formApi.GetFormsList().snapshotChanges().subscribe(data => {
        this.Form = [];
        data.forEach(item => {
          const form_ = item.payload.toJSON();
          form_['$key'] = item.key;
          this.Form.push(form_ as Form);
        });
        this.data_ = true;
      }); */
      // this.toastr.success(student.firstName + ' successfully deleted!');
    }
  }
}
