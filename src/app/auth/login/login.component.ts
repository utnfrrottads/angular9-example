import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css'
  ]
})
export class LoginComponent  {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
    if (localStorage.getItem('token') !== null){
      this.router.navigateByUrl('/home');
    }
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email : [ '', [Validators.required, Validators.email]],
      password : [ '' , Validators.required]
    });
  }
  fieldValid(field: string){
    return this.loginForm.get(field).invalid &&
           this.loginForm.get(field).touched;
  }

  signIn(){
    if (this.loginForm.invalid){
      Object.values(this.loginForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return ;
    }
    this.userService.signIn(this.loginForm.value)
                          .subscribe(resp => {
                            Swal.fire({
                              title: 'Ingresando',
                              icon: 'success',
                              timer: 2000,
                              showConfirmButton: false,
                              allowOutsideClick: false
                            });
                            setTimeout(() => {
                              this.router.navigateByUrl('/home');
                            }, 2000);
                          }, ( err ) => {
                            Swal.fire('Email y/o contraseña incorrectos', 'Por favor, ingrese nuevamente sus datos' , 'error');
                          });
  }
}
