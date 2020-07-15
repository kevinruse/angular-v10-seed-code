import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
import { FormInputComponent } from './form-input/form-input.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports:      [ BrowserModule, FontAwesomeModule ],
    declarations: [ AppComponent,
                    HeaderComponent,
                    ChildComponent,
                    FormInputComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {
}
