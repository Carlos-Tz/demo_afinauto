import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { LoginComponent } from './admin/login/login.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { NewRegisterComponent } from './admin/new-register/new-register.component';
import { PanelComponent } from './admin/panel/panel.component';
import { RegisterComponent } from './admin/register/register.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SpinnerComponent } from './admin/spinner/spinner.component';
import { EditRegisterComponent } from './admin/edit-register/edit-register.component';
import { BtnCallComponent } from './admin/edit-register/btn-call/btn-call.component';
import { NewCallComponent } from './admin/edit-register/new-call/new-call.component';
import { EditCallComponent } from './admin/edit-register/edit-call/edit-call.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from './admin/calendar/calendar.component';
import { NewCitaComponent } from './admin/new-cita/new-cita.component';
import { PhotosComponent } from './admin/photos/photos.component';
import { CasaComponent } from './admin/photos/casa/casa.component';
import { NewCasaComponent } from './admin/new-casa/new-casa.component'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    LoginComponent,
    NavbarComponent,
    NewRegisterComponent,
    PanelComponent,
    RegisterComponent,
    VerifyEmailComponent,
    SpinnerComponent,
    EditRegisterComponent,
    BtnCallComponent,
    NewCallComponent,
    EditCallComponent,
    CalendarComponent,
    NewCitaComponent,
    PhotosComponent,
    CasaComponent,
    NewCasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
