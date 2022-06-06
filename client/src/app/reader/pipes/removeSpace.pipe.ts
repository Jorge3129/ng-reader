import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpace'
})
export class RemoveSpacePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value === "&nbsp;" ? "" : value
  }

}
