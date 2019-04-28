import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { PasswordValidator } from './password.validators';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;

  
  constructor(fb: FormBuilder) {

    this.inscriptionForm = fb.group(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        lastname: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        phone: new FormControl('', [
          Validators.required,
          Validators.maxLength(8),
          Validators.pattern('[0-9]+'),
        ]),
        rpassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        
        email: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]),
      }
    ,
    {
      validator:PasswordValidator.passwordShouldMatch
    }
    );
  }
  get password() {
    return this.inscriptionForm.get('password')
  }
  get name() {
    return this.inscriptionForm.get('name')
  }
  get lastname() {
    return this.inscriptionForm.get('lastname')
  }
  get phone() {
    return this.inscriptionForm.get('phone')
  }
  get email() {
    return this.inscriptionForm.get('email')
  }
  get rpassword() {
    return this.inscriptionForm.get('rpassword')
  }

  inscription() {
    console.log(this.inscriptionForm.value)
  }
  ngOnInit() {
  }

}
