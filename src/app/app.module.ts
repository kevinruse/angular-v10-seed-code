import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
import { FormInputComponent } from './form-input/form-input.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatusComponent } from './status/status.component';
import { StatusDirective } from './directives/status.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports:      [ BrowserModule,
                    FontAwesomeModule,
                    FormsModule,
                    ReactiveFormsModule],
    declarations: [ AppComponent,
                    HeaderComponent,
                    ChildComponent,
                    FormInputComponent,
                    StatusComponent,
                    StatusDirective,
                    LoginComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {
}
