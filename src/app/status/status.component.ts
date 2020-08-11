import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: '{{content}}',
  styles: [`
    :host {
        background: white;
        padding: 0.25em;
        border: solid 1px #000;
        border-radius: .25em;
        position: absolute;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 20px;
        width: 10em;
    }
  `]
})
export class StatusComponent implements OnInit {

  content: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
