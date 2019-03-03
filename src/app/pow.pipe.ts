import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'appPow'
})
export class PowPipe implements PipeTransform{
    transform(value: any,powNumber = 1,str='') {
        return str+Math.pow(value,powNumber);
    }


}