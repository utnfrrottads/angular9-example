import { Injectable, Inject } from '@angular/core';
import { User } from '../model/user';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  readonly appID = 'RWA';
  readonly currentUserID = 'current-user';

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  saveLogIn(user: User){
    this.storage.set(this.appID + this.currentUserID, user.token);
  }

  getAuthentication(){
    return this.storage.get(this.appID + this.currentUserID);
  }

  logOut(){
    this.storage.remove(this.appID + this.currentUserID);
  }
  
  set(key, value){
    this.storage.set(this.appID + key, value)
  }

  get(key){
    return this.storage.get(this.appID + key);
  }
}
