import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signIn(dataForm){
    const body = {
      user: {
        email: dataForm.email,
        password: dataForm.password
      }
   };
    return this.http.post('https://conduit.productionready.io/api/users/login', body)
                    .pipe(tap((resp: any) => {
                        localStorage.setItem('token', resp.user.token);
                        localStorage.setItem('username', resp.user.username);
                    }));
  }

  signUp(dataForm){
    const body = {
    user: {
         username: dataForm.username,
         email: dataForm.email,
         password: dataForm.password
       }
    };
    return this.http.post('https://conduit.productionready.io/api/users', body);
  }
}
