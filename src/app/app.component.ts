import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
    @ViewChild(ChildComponent, {static: false}) childView: ChildComponent;
    @ViewChildren(ChildComponent) childrenView: QueryList<any>;
    @ViewChild('fruit', {static: false}) fruit: ElementRef;
    user = {id: 1, name: 'Kevin', gender: 'M', ageGroup: '51+', userCode: 'M51+', reqs: {},
        reqsStatus: {fruitMet: false, vegMet: false, proteinMet: false, grainMet: false},
        registered: false, email: 'kevin@kevinruse.com'};
    loggedIn: boolean = false;
    logIn(evt): void {
        console.log(evt);
        this.loggedIn = evt;
        this.user.registered = !this.user.registered;
    }

    addFruit(): void {
        this.childView.fruitCounter();
        this.fruit.nativeElement.innerText = this.childView.fruitStatus;
        console.log(this.childView.fruitStatus);
    }

    constructor() {
        // console.log(this.childView);
    }

    ngAfterViewInit(): void {
        console.log(this.childrenView);
        const children: ChildComponent[] = this.childrenView.toArray();
        console.log(children);
        console.log(this.fruit);
        console.table(this.childView);
    }

}
