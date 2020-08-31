import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent {

  messageShow = false;
  messageText = '';
  messageClass = '';

  constructor(private userService: UsersService,
    private router: Router) {}

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.minLength(1)),
    pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeatPass: new FormControl('')
  });

  goToSignIn(){
    this.router.navigate(['/signin']);
  }

  signUp() {
    if (this.signupForm.value.pass === this.signupForm.value.repeatPass) {
      this.userService
        .signUp(
          this.signupForm.value.username,
          this.signupForm.value.email,
          this.signupForm.value.pass
        )
        .subscribe(
          (res: any) => {
            this.showMessage('¡Usuario creado con éxito!', 'alert-primary');
            this.signupForm.patchValue({
              repeatPass: '',
              pass: '',
            });
            this.messageShow = true;
          },
          (err) => {
            this.showMessage(err, 'alert-danger');
          }
        );
      this.router.navigate(['/signin']);
    } else {
      this.showMessage('Las contraseñas no coinciden', 'alert-danger');
    }
  }

  showMessage(text, msgClass) {
    this.messageShow = true;
    this.messageClass = msgClass;
    this.messageText = text;
  }
}
