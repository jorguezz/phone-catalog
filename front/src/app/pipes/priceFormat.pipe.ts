import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'priceFormat'})
export class PriceFormatterPipe implements PipeTransform {

  transform(value: number | string = 0, currency: string = '€', dec: number = 2): String {
    const _value = (typeof value === 'number') ? value : parseFloat(value);
    return _value.toFixed(dec) + ' ' + currency;
  }

}
