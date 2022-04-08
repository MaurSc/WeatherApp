import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCelcius'
})
export class CelciusPipe implements PipeTransform {

  transform(value: number): number {
    return Math.floor(value - 273.15);;
  }

}
