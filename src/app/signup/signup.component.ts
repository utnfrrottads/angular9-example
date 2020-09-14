import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

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
  });
  formErrors: any = {username: undefined, password: undefined, email: undefined};

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(){
    const user = this.signupForm.value;
    this.http.registerUser(user).subscribe(response => {
      if (response.errors === undefined){
        this.router.navigate(['home/all/1']);
      }
      else{
        this.formErrors = response.errors;
      }
    });
  }

}
