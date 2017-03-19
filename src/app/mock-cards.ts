import { Card } from './card';

const DEV_CARDS: Card[] = [
  {
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
  }
]

const QA_CARDS: Card[] = [
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
  }
]

export const CARDS = DEV_CARDS.concat(QA_CARDS);
