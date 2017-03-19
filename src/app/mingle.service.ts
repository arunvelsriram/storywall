import { Injectable } from '@angular/core';

import { Card } from './card';
import { Lane } from './lane';
import { CARDS } from './mock-cards';

const AVAILABLE_LANES = ['DEV', 'QA'];

@Injectable()
export class MingleService {
  getCards(): Card[] {
    return CARDS;
  }

  getAllLaneNames(): string[] {
    return AVAILABLE_LANES;
  }
}
