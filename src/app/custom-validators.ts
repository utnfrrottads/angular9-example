import { ValidatorFn, AbstractControl, Validators } from '@angular/forms';

export const isUrl = Validators.pattern(
  /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
);
