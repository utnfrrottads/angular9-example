import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

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
    this.router.navigate(['home']);
    console.log(this.signinForm.value);
    this.http.logIn(this.signinForm.value);
  }

}
