import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'carFilter',
    // pure:false - срабатывает при каждом изменение объекта, массива.
})
export class CarFilterPipe implements PipeTransform {

    transform(carList, searchStr:string) {
        console.log(searchStr);
        if (searchStr === '') {
            return carList;
        }
        return carList.filter((car) => car.name === searchStr);
    }

}
