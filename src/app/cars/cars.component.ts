import {Component,ViewEncapsulation} from '@angular/core';
import {Event} from "@angular/router";

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class CarsComponent {

    cars = [{
        name: 'Ford',
        year: 2019
    }];

    updateCarList(car) {
        this.cars.push(car);
    }


    // addCarStatus = '';
    // carName = '';
    // addCarStat = false;
    // // inputText = '';
    // // inputTextEnter = 'Default text';
    // cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bentle'];
    // dates = [
    //     new Date(2015,3,3).toDateString(),
    //     new Date(2011,3,14).toDateString(),
    //     new Date(2017,3,24).toDateString(),
    //     new Date(2000,3,14).toDateString(),
    // ];
    // // items = [{id:3,name:'item_1'},{id:6,name:'item_2'},{id:9,name:'item_3'}];
    //
    // constructor() {
    // }
    //
    // addCar() {
    //     this.addCarStat = true;
    //     this.cars.push(this.carName);
    // }
    //
    // // setBigCarText(car) {
    // //     return car.length>4?true:false;
    // // }
    //
    // // onKeyUp(value){
    // //     this.inputText = value;
    // // }
    // // onKeyUpEnter(event){
    // //         this.inputTextEnter = event.target.value;
    // // }
}
