import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styles: []
})
export class FormLoginComponent implements OnInit {
  
  public formData: FormGroup;

  constructor( private FormBuilder: FormBuilder) { }
   
  private resetForm = () => {
    this.formData = this.FormBuilder.group({
      email: [ '' , Validators.required ],
      password: [ '' , Validators.required ],
    })
  }

  private submitForm = () => {
    console.log('submit')
  }

  ngOnInit() {
    this.resetForm();
  }
}
