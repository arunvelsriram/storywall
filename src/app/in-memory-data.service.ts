import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cards = [{
      number: 3327,
      name: 'Some story',
      lane: 'Dev',
      owner: 'Arun',
      another_owner: 'Prasanth'
    },
    {
      number: 3328,
      name: 'Some other story',
      lane: 'Dev',
      owner: 'Saran',
      another_owner: 'Vaishu'
    },
    {
      number: 3329,
      name: 'Some story',
      lane: 'QA',
      owner: 'Poornima',
      another_owner: 'Sravanthi'
    },
    {
      number: 3330,
      name: 'Some other story',
      lane: 'QA',
      owner: 'Poornima',
      another_owner: 'Sravanthi'
    }];
    return { cards };
  }
}
