import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private service: ArticlesService) {}

  creationMode:boolean = false;
  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    pass: new FormControl(''),
  });

  ngOnInit(): void {}

  login() {
    this.service
      .login(this.loginForm.value.email, this.loginForm.value.pass)
      .subscribe(
        (res: any) => {
          let token = res.user.token;
          localStorage.setItem('token', token);
        },
        (err) => {
          console.log('Error al logearse', err);
        }
      );
  }

  createAccount(){
    console.log("CREANDO CUENTA.")
  }

  toggleCreationMode(){
    this.creationMode = !this.creationMode;
  }
}
