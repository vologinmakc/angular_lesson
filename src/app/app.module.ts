import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyComponent} from './my/my.component';
import {MyNewComponent} from './my-new/my-new.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {AddCarComponent} from './add-car/add-car.component';
import {BackgroundDirective} from './directives/background.directive';
import {PowPipe} from "./pow.pipe";
import { CarFilterPipe } from './car-filter.pipe';


@NgModule({
    declarations: [
        AppComponent,
        MyComponent,
        MyNewComponent,
        CarsComponent,
        CarComponent,
        AddCarComponent,
        BackgroundDirective,
        PowPipe,
        CarFilterPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
