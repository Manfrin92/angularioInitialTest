import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToBrazilianNumber',
})
export class ConvertToBrazilianNumber implements PipeTransform {
  transform(value: string): string {
    return value.replace('.', ',');
  }
}
