import { FormGroup } from '@angular/forms';

export function confirmPasswordValidator(ps: string, cps: string) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[ps];
    const confirmPassword = formGroup.controls[cps];

    if (password.value != confirmPassword.value) {
      confirmPassword.setErrors({ confirmPasswordValidator: true });
    } else {
      confirmPassword.setErrors(null);
    }
  };
}
