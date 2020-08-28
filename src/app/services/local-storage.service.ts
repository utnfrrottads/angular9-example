import { Injectable, Inject } from '@angular/core';
import { User } from '../model/user';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  appID = 'RWA'; 

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  saveLogIn(user: User){
    this.storage.set(this.appID + 'current-user', user.token);
  }

  getAuthentication(){
    return this.storage.get(this.appID + 'current-user');
  }

  logOut(){
    this.storage.set(this.appID + 'current-user', null)
  }
}
