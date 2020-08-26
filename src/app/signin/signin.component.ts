import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  logIn(){
    
  }

}
