import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Form } from '../models/form';
import { Call } from '../models/call';
import { Cita } from '../models/cita';
import { Casa } from '../models/casa';
import { Orden } from '../models/orden';
import { Nota } from '../models/nota';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  formsList: AngularFireList<any>;
  formObject: AngularFireObject<any>;
  /* citaObject: AngularFireObject<any>; */
  /* public callList: AngularFireList<any>; */
  public ordenList: AngularFireList<any>;
  public notaList: AngularFireList<any>;
  public ordenObject: AngularFireObject<any>;
  public notaObject: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  AddForm(form: object) {
    this.formsList.push(form as Form);
  }

  AddOrden(orden: object) {
    this.ordenList.push(orden as Orden);
  }

  AddNota(nota: object) {
    this.notaList.push(nota as Nota);
  }

  GetFormsList() {
    this.formsList = this.db.list('afinauto/client-list');
    return this.formsList;
  }

  GetOrdenesList() {
    this.ordenList = this.db.list('afinauto/orden-list');
    return this.ordenList;
  }

  GetNotasList() {
    this.notaList = this.db.list('afinauto/nota-list');
    return this.notaList;
  }

  GetForm(key: string) {
    this.formObject = this.db.object('afinauto/client-list/' + key);
    return this.formObject;
  }

  GetOrden(key: string) {
    this.ordenObject = this.db.object('afinauto/orden-list/' + key);
    return this.ordenObject;
  }

  GetNota(key: string) {
    this.notaObject = this.db.object('afinauto/nota-list/' + key);
    return this.notaObject;
  }

  UpdateForm(form: Form, key: string) {
    this.db.object('afinauto/client-list/' + key)
    .update(form);
  }

  UpdateOrden(orden: Orden, key: string) {
    this.db.object('afinauto/orden-list/' + key)
    .update(orden);
  }

  UpdateNota(nota: Nota, key: string) {
    this.db.object('afinauto/nota-list/' + key)
    .update(nota);
  }
  /* UpdateEstado(form: Form, key: string) {
    this.db.object('afinauto/client-list/' + key)
    .update(form);
  } */

  /* UpdateLengthCalls(ncalls: number, key: string) {
    this.db.object('afinauto/client-list/' + key)
    .update({ nCalls: ncalls });
  } */

  DeleteForm(key: string) {
    this.formObject = this.db.object('afinauto/client-list/' + key);
    this.formObject.remove();
  }

  DeleteOrden(key: string) {
    this.ordenObject = this.db.object('afinauto/orden-list/' + key);
    this.ordenObject.remove();
  }

  DeleteNota(key: string) {
    this.notaObject = this.db.object('afinauto/nota-list/' + key);
    this.notaObject.remove();
  }
  /* DeleteCasa(key: string) {
    this.casaObject = this.db.object('afinauto/casas/' + key);
    this.casaObject.remove();
  } */

  /* DeleteCita(key: string) {
    this.citaObject = this.db.object('afinauto/citas/' + key);
    this.citaObject.remove();
  } */

  /* async AddCall(call: any, key: string) {
      this.callList.push(call as Call);
  }

  GetCall(key: string) {
    this.callList = this.db.list('afinauto/client-list/' + key + '/llamadas', ref =>
      ref.orderByChild('id_')
    );
    return this.callList;
  }
  async AddCita(cita: any) {
      this.citaList.push(cita as Cita);
  }
  async AddCasa(casa: any) {
      this.casasList.push(casa as Casa);
  } */

  /* GetCita() {
    this.citaList = this.db.list('afinauto/citas', ref =>
      ref.orderByChild('id_')
    );
    return this.citaList;
  }
  GetCasas() {
    this.casasList = this.db.list('afinauto/casas', ref =>
      ref.orderByChild('id_')
    );
    return this.casasList;
  }

  GetCurrentCall(key: string, key2: string) {
    this.callObject = this.db.object('afinauto/client-list/' + key + '/llamadas/' + key2);
    return this.callObject;
  }
  GetCurrentCasa(key: string) {
    this.casaObject = this.db.object('afinauto/casas/' + key);
    return this.casaObject;
  }

  UpdateCall(call: Call) {
    this.callObject.update(call);
  }
  UpdateCasa(casa: Casa) {
    this.casaObject.update(casa);
  } */
}
