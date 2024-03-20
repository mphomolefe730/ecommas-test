import { FormGroup, ValidatorFn, AbstractControl, ValidationErrors, } from '@angular/forms';

export class confirmPasswordValidator {
    static match(): ValidatorFn {
      return (formGroup: AbstractControl): ValidationErrors | null => {
        const passwordControl = formGroup.get('password');
        const confirmPassword = formGroup.get('confirmPassword');
  
        if (passwordControl && confirmPassword) {
          if (passwordControl.value !== confirmPassword.value) {
            confirmPassword.setErrors({ mismatch: true });
            return { mismatch: true };
          } else {
            confirmPassword.setErrors(null);
            return null;
          }
        }
  
        return null; // Return null if controls are not found
      };
    }
  }