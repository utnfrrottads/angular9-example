import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  register(){
    let user = this.signupForm.value;
    this.http.registerUser(user);
  }

}
