import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Output() loggingIn = new EventEmitter();
  signinForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email])
  })

  constructor(
    private http: HttpService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  logIn(){
    this.http.logIn(this.signinForm.value).subscribe( 
      response => this.loggingIn.emit(response.user.token)
    );
    this.router.navigate(['home']);
  }

}
