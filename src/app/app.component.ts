import { Component } from '@angular/core';
import { FormGroup, FormControl, Form, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo';
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required, StartsWithAValidator]),
  })
    constructor () {
      this.profileForm.valueChanges.subscribe(value => console.log(value));
    }

  onSubmit() {
    console.log(this.profileForm.value);
  }
  initialize() {
    this.profileForm.reset()
  }  
}

export function StartsWithAValidator(control: AbstractControl) {
  if (!control.value.startsWith('A')) {
    return { startsWithA: true };
  }
  return null;
}