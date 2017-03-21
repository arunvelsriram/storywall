/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { MingleService } from './mingle.service';
import { CARDS } from './mock-cards'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

describe('MingleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
      ],
      providers: [MingleService]
    });
  });

  it('should ...', inject([MingleService], (service: MingleService) => {
    expect(service).toBeTruthy();
  }));

  it('should get cards from Mingle', async(inject([MingleService], (service: MingleService) => {
    service.getCards().then((cards) => {
      expect(cards).toEqual(CARDS);
    });
  })));

  it('should get all the available lanes', inject([MingleService], (service: MingleService) => {
    expect(service.getLanes()).toEqual(['Dev', 'QA']);
  }));

});
