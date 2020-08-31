import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  messageShow = false;
  messageText = '';
  messageClass = '';

  constructor(private userService: UsersService,
    private router: Router,
    private localStorageService: LocalStorageService) {
  }

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  ngOnInit(): void {
    if (this.localStorageService.getToken() === null) {
      this.router.navigate(['signin']);
    }
  }

  signIn() {
    this.userService
      .signIn(this.signinForm.value.email, this.signinForm.value.pass)
      .subscribe(
        (res: any) => {
          this.localStorageService.setToken(res.user.token);
          this.localStorageService.setUserName(res.user.username);
          this.router.navigate(['/articles']);
        },
        (err) => {
          this.showMessage(
            'Error de logueo. Contraseña o email incorrectos.',
            'alert-danger'
          );
        }
      );
  }

  showMessage(text, msgClass) {
    this.messageShow = true;
    this.messageClass = msgClass;
    this.messageText = text;
  }

  goToSignUp(){
    this.router.navigate(['signup']);
  }
}