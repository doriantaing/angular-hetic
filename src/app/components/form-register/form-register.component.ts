import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styles: []
})
export class FormRegisterComponent implements OnInit {

  public formData: FormGroup;

  constructor( private FormBuilder: FormBuilder) { }
   
  private resetForm = () => {
    this.formData = this.FormBuilder.group({
      first_name: [ '' , Validators.required ],
      last_name: [ '' , Validators.required ],
      email: [ '' , Validators.required ],
      password: [ '' , Validators.required ],
      password_repeate: [ '' , Validators.required ],
      street: [ '' , Validators.required ],
      city: [ '' , Validators.required ],
      country: [ '' , Validators.required ],
      birthdate: [ '' , Validators.required ],
      position: [ 'NULL' , Validators.required ],
      profil: [ 'Merchant' , Validators.required ],
      cgu: [  false, Validators.required],
    })
  }

  private submitForm = () => {
    console.log('submit')
  }

  ngOnInit() {
    this.resetForm();
  }

}
