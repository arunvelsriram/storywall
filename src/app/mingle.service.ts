import { Injectable } from '@angular/core';

import { Card } from './card';
import { CARDS } from './mock-cards';

const AVAILABLE_LANES = ['Dev', 'QA'];

@Injectable()
export class MingleService {
  getCards(): Card[] {
    return CARDS;
  }

  getLanes(): string[] {
    return AVAILABLE_LANES;
  }
}
