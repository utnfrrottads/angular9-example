import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css'
  ]
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router){
    if (localStorage.getItem('token' ) !== null){
      this.router.navigateByUrl('/home');
    }
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.fb.group({
      username: ['' , Validators.required],
      email: ['' , [Validators.required, Validators.email]],
      password: ['' , Validators.required]
    });
  }

  fieldValid(field: string){
    return this.registerForm.get(field).invalid &&
            this.registerForm.get(field).touched;
  }

  signUp(){
    if (this.registerForm.invalid){
      Object.values(this.registerForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return ;
    }
    this.userService.signUp(this.registerForm.value)
                  .subscribe(resp => {
                    Swal.fire({
                      title: 'Usuario Registrado',
                      icon: 'success',
                      timer: 2000,
                      showConfirmButton: false,
                      allowOutsideClick: false
                    });
                    setTimeout(() => {
                      this.router.navigateByUrl('/login');
                    }, 2000);
                  }, (err) => {
                    Swal.fire('Error en el registro, modifique los campos', err.body, 'error');
                  });
                  }
}
