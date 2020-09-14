import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnDestroy {

  @Output() loggingIn = new EventEmitter();

  signinForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  loginSubscription: Subscription;

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  ngOnDestroy(){
    if (this.loginSubscription !== undefined){
      this.loginSubscription.unsubscribe();
    }
  }

  logIn(){
    this.loginSubscription = this.http.logIn(this.signinForm.value).subscribe(
      response => this.loggingIn.emit(response.user.token)
    );
    this.router.navigate(['home/all/1']);
  }

}
