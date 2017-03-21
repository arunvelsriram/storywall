import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lane'
})
export class LanePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let laneName = args;
    return value.filter(card => {
      return card.lane === laneName;
    });
  }

}
