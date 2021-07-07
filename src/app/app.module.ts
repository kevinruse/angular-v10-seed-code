import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppComponentComponent } from './app-component/app-component.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, AppComponentComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {
}
