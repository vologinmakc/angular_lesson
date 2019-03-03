import {Component} from '@angular/core';
import 'rxjs';
import {Observable} from "rxjs/internal/Observable";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    num = 2;
    searchCar = '';
    cars = [
        {name: 'Mazda'},
        {name: 'Ford'},
        {name: 'Bently'},
        {name: 'Audi'},
        {name: 'BMW'},
    ];

    asyncTitle ;

    addCar() {
        this.cars.push({
            name: 'NewCar'
        });
    }

}

// headerText = 'Создание своей директивы';
// items = [1, 2, 3, 4, 5];
// current = 1;
//
// onClicks(number: number) {
//     this.current = number;
// }
// name = 'WebForMySelf';
// pi = 3.14598565856;
// money = 350;
// date = new Date();
// amount = 0.45;
// object = {
//     foo: 'bar',
//     baz: 'qux',
//     nested:
//         {
//             xyz: 3,
//             numbers: [1, 2, 3]
//         }
// };
