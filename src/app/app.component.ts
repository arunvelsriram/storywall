import { Component } from '@angular/core';

export class Card {
  number: number;
  name: string;
  lane: string;
  owner: string;
  another_owner: string;
}

export class Lane {
  name: string;
  cards: Card[];
}

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

const LANES: Lane[] = [
  {
    name: 'Dev',
    cards: DEV_CARDS
  },
  {
    name: 'QA',
    cards: QA_CARDS
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  lanes = LANES;
}
