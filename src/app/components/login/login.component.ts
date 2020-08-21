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

  creationMode: boolean = false;

  messageShow: boolean = false;
  messageText: string = '';
  messageClass: string = '';

  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    pass: new FormControl(''),
    repeatPass: new FormControl(''),
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
            if (err.error.errors.username[0] === 'has already been taken') {
              this.showMessage(
                'Nombre de usuario no disponible.',
                'alert-danger'
              );
            } else if (err.error.errors.email[0] === 'has already been taken') {
              this.showMessage(
                'Este email ya se encuentra asociado en otra cuenta.',
                'alert-danger'
              );
            } else {
              this.showMessage('Error', 'alert-danger');
            }
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
