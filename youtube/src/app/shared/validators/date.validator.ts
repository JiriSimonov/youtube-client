import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isValidDate(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const currentDate = new Date().getTime();
    const dateFromControl = new Date(control.value).getTime();
    return currentDate < dateFromControl ? { invalidDate: true } : null;
  };
}
