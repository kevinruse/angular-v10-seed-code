import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  nameForm: FormGroup;
  userName: any;

  constructor(private formBuilder: FormBuilder) {
    this.nameForm = formBuilder.group({
      'userName' : [null, [Validators.required, Validators.maxLength(5)]]
    });
    this.userName = this.nameForm.controls['userName'];
  }


  onSubmit(formValues): void {
    console.log(formValues);
  }

  log(val): void {
    console.log(val);
  }

  ngOnInit(): void {
  }
}
