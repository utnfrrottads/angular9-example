import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private service: ArticlesService, private router: Router) {}

  creationMode: boolean = false;

  messageShow: boolean = false;
  messageText: string = '';
  messageClass: string = '';

  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeatPass: new FormControl(''),
  });

  ngOnInit(): void {
    // si se quiere meter sin estar logeado, lo manda al Login.
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    }
  }

  login() {
    this.service
      .login(this.loginForm.value.email, this.loginForm.value.pass)
      .subscribe(
        (res: any) => {
          localStorage.setItem('token', res.user.token);
          localStorage.setItem('username', res.user.username);
          this.router.navigate(['/articles']);
        },
        (err) => {
          this.showMessage(
            'Error al logearse. Intente denuevo.',
            'alert-danger'
          );
        }
      );
  }

  createAccount() {
    if (this.loginForm.value.repeatPass === this.loginForm.value.pass) {
      this.service
        .registration(
          this.loginForm.value.username,
          this.loginForm.value.email,
          this.loginForm.value.pass
        )
        .subscribe(
          (res: any) => {
            this.showMessage(
              '¡Usuario creado con exito! Intente logearse.',
              'alert-primary'
            );
            this.loginForm.patchValue({
              repeatPass: '',
              pass: '',
            });
            this.toggleCreationMode();
            this.messageShow = true;
          },
          (err) => {
            let errores = stringify(err.error.errors).split('&');
            let errores_space = errores.map((e) =>
              e.replace(new RegExp('%20', 'g'), ' ')
            );
            this.showMessage(errores_space, 'alert-danger');
          }
        );
    } else {
      this.showMessage('Las contraseñas no coinciden', 'alert-danger');
    }
  }

  toggleCreationMode() {
    this.messageShow = false;
    this.creationMode = !this.creationMode;
  }

  showMessage(text, msgClass) {
    this.messageShow = true;
    this.messageClass = msgClass;
    this.messageText = text;
  }
}
