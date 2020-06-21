import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Form } from '../models/form';
import { Call } from '../models/call';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  formsList: AngularFireList<any>;
  formObject: AngularFireObject<any>;
  public callList: AngularFireList<any>;
  public callObject: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  AddForm(form: object) {
    this.formsList.push(form as Form);
  }

  GetFormsList() {
    this.formsList = this.db.list('virami/client-list');
    return this.formsList;
  }

  GetForm(key: string) {
    this.formObject = this.db.object('virami/client-list/' + key);
    return this.formObject;
  }

  UpdateForm(form: Form, key: string) {
    this.db.object('virami/client-list/' + key)
    .update(form);
  }

  UpdateLengthCalls(ncalls: number, key: string) {
    this.db.object('virami/client-list/' + key)
    .update({ nCalls: ncalls });
  }

  DeleteForm(key: string) {
    this.formObject = this.db.object('virami/client-list/' + key);
    this.formObject.remove();
  }

  async AddCall(call: any, key: string) {
      this.callList.push(call as Call);
  }

  GetCall(key: string) {
    this.callList = this.db.list('virami/client-list/' + key + '/llamadas', ref =>
      ref.orderByChild('id_')
    );
    return this.callList;
  }

  GetCurrentCall(key: string, key2: string) {
    this.callObject = this.db.object('virami/client-list/' + key + '/llamadas/' + key2);
    return this.callObject;
  }

  UpdateCall(call: Call) {
    this.callObject.update(call);
  }
}
