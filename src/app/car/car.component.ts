///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, ContentChild, ElementRef, Input, ViewChild, OnInit, OnChanges} from '@angular/core';


@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnChanges {


    // carName = 'ford';
    // carYear = 2015;
    @Input() carItem;
    @ContentChild('carHeading') carHeading: ElementRef;

    constructor() {
        console.log('constructor');
    }

    ngOnInit(): void {
        console.log('ngOnInit');
    }

    ngOnChanges(): void {
        console.log('ngOnChanges');
    }


    // getName() {
    //    return this.carName;
    // }

}
