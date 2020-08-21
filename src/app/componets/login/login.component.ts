import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    user: new FormControl(''),
    pass: new FormControl(''),
  });


  ngOnInit(): void {
  }


  login(){
    console.log(this.loginForm.value.user)
  }
}
