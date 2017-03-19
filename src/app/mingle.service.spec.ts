/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MingleService } from './mingle.service';

import { CARDS } from './mock-cards';

describe('MingleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MingleService]
    });
  });

  it('should ...', inject([MingleService], (service: MingleService) => {
    expect(service).toBeTruthy();
  }));

  it('should get cards from Mingle', inject([MingleService], (service: MingleService) => {
    expect(service.getCards()).toEqual(CARDS);
  }));

  it('should get all the available lanes', inject([MingleService], (service: MingleService) => {
    expect(service.getLanes()).toEqual(['Dev', 'QA']);
  }));

});
