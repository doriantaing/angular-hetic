import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styles: []
})
export class FormRegisterComponent implements OnInit {
  @Output() formSubmit = new EventEmitter()
  public formData: FormGroup;

  constructor( private FormBuilder: FormBuilder) { }
   
  private resetForm = () => {
    this.formData = this.FormBuilder.group({
      first_name: [ 'dd' , Validators.required ],
      last_name: [ 'dd' , Validators.required ],
      email: [ 'dd@dd.com' , Validators.required, Validators.email ],
      password: [ 'dd' , Validators.required ],
      password_repeate: [ 'dd' , Validators.required ],
      street: [ 'dd' , Validators.required ],
      city: [ 'dd' , Validators.required ],
      country: [ 'dd' , Validators.required ],
      zip_code: ['13100', Validators.required],
      birthdate: [ '18/08/1979' , Validators.required ],
      position: [ 'NULL' , Validators.required ],
      type: ['Merchant', Validators.required],
      cgu: [  true, Validators.required],
    })
  }

  private submitForm = () => {
    this.formSubmit.emit(this.formData.value);
  }

  ngOnInit() {
    this.resetForm();
  }

}
