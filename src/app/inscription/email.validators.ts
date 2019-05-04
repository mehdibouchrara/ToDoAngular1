import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidator {

    static emailUnique(control:AbstractControl) : Promise <ValidationErrors|null>
    {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(control.value==='admin@gmail.com')
                    resolve ({emailUnique : true })
                else
                    resolve (null)
            }, 2000);
        });
    }
}