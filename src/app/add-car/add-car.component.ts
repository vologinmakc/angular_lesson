import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {
    carName = '';
    carYear = 2017;
    @Output() onAddCar = new EventEmitter();
    @ViewChild('carYearInput') carYearInput: ElementRef;

    addCar(carNameInput) {
        //todo action
        this.onAddCar.emit({
            name: carNameInput.value,
            year: +this.carYearInput.nativeElement.value//+ переведет в число
        });
        this.carName = '';
        this.carYear = 2017;
    }
}
