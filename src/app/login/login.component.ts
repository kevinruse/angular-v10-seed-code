import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  onSubmit(form: any): void {
    console.log('you submitted value: ', form);
  }

  log(val) {
    console.log(val);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
