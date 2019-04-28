import { AbstractControl } from '@angular/forms';

export class PasswordValidator {

    static passwordShouldMatch(control: AbstractControl) {
      
        let password = control.get('password');
        let rpassword = control.get('rpassword');

        if (password.value !== rpassword.value) {

            return { passwordShouldMatch: true };
        }
        return false;


    }
}
