import { Pipe } from '@angular/core';

@Pipe({
  name: 'LanePipe'
})
export class LanePipe {
  
  transform(items, args?) {
    let laneName = args;
    return items.filter(card => {
      return card.lane === laneName;
    });
  }

}
