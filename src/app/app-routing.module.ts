import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './admin/panel/panel.component';
import { NewRegisterComponent } from './admin/new-register/new-register.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SecureInnerPagesGuard } from './services/secure-inner-pages.guard';
import { SpinnerComponent } from './admin/spinner/spinner.component';
import { EditRegisterComponent } from './admin/edit-register/edit-register.component';
import { CalendarComponent } from './admin/calendar/calendar.component';
import { PhotosComponent } from './admin/photos/photos.component';
import { MainComponent } from './admin/main/main.component';
import { EditCasaComponent } from './admin/photos/edit-casa/edit-casa.component';
import { PrintCasaComponent } from './admin/photos/print-casa/print-casa.component';
import { ClientesComponent } from './admin/clientes/clientes.component';
import { NotasComponent } from './admin/notas/notas.component';
import { OrdenesComponent } from './admin/ordenes/ordenes.component';
import { NewOrdenComponent } from './admin/new-orden/new-orden.component';
import { NewNotaComponent } from './admin/new-nota/new-nota.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: MainComponent},
  {path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard]},
  {path: 'notas', component: NotasComponent, canActivate: [AuthGuard]},
  {path: 'ordenes', component: OrdenesComponent, canActivate: [AuthGuard]},
  {path: 'panel', component: PanelComponent, canActivate: [AuthGuard]},
  {path: 'spinner', component: SpinnerComponent},
  {path: 'new', component: NewRegisterComponent, canActivate: [AuthGuard]},
  {path: 'nueva-orden', component: NewOrdenComponent, canActivate: [AuthGuard]},
  {path: 'nueva-nota', component: NewNotaComponent, canActivate: [AuthGuard]},
  {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
  {path: 'photos', component: PhotosComponent, canActivate: [AuthGuard]},
  {path: 'edit/:key', component: EditRegisterComponent, canActivate: [AuthGuard]},
  {path: 'edit-casa/:key', component: EditCasaComponent, canActivate: [AuthGuard]},
  {path: 'pdf/:key', component: PrintCasaComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]},
 /*  {path: 'resetPass', component: ResetPassComponent, canActivate: [SecureInnerPagesGuard]} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
