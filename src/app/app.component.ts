import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Todo';
  profileForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    lastName: new FormControl('', [Validators.required, StartsWithAValidator]),
  });
  constructor() {
    this.profileForm.valueChanges.subscribe((value) => console.log(value));
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
  initialize() {
    this.profileForm.reset();
  }
}

export const StartsWithAValidator = (): ValidatorFn => (
  control: AbstractControl
): { [key: string]: any } | null => {
  if (!control.value.startsWith('A')) {
    return { startsWithA: false };
  }
  return null;
};
