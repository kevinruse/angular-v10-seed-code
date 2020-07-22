import { Component, Input, OnInit } from '@angular/core';
import { HeaderTitleService } from '../services/header-title.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    userName: string = 'Kevin';
    title: string;

    @Input()
    user;

    constructor(private headerTitleService: HeaderTitleService) {
    }
    ngOnInit(): void {
        this.title = this.headerTitleService.getTitle();
    }
}
