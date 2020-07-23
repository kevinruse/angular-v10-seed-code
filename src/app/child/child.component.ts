import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  fruitStatus: number = 0;

  @Output()
  login = new EventEmitter<boolean>();

  loginOutput(login: boolean): void {
    this.login.emit(login);
    console.log(login);
  }

  fruitCounter(): number {
    return this.fruitStatus++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
