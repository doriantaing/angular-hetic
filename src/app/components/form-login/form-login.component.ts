import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styles: []
})
export class FormLoginComponent implements OnInit {
  @Output() formSubmit = new EventEmitter()
  public formData: FormGroup;

  constructor( private FormBuilder: FormBuilder) { }
   
  private resetForm = () => {
    this.formData = this.FormBuilder.group({
      email: [ '' , Validators.required ],
      password: [ '' , Validators.required ],
    })
  }

  private submitForm = () => {
    this.formSubmit.emit(this.formData.value);
  }

  ngOnInit() {
    this.resetForm();
  }
}
