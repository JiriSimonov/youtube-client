import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isValidPassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const hasUpperCase = /[A-Z]+/.test(control.value);
    const hasLowerCase = /[a-z]+/.test(control.value);
    const hasNumeric = /[0-9]+/.test(control.value);
    const hasSpecialCharacter = /[!"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~]+/.test(control.value);
    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialCharacter;
    return !passwordValid ? { invalidPassword: true } : null;
  };
}
