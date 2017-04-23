/* tslint:disable:no-unused-variable */

import {
  TestBed,
  getTestBed,
  async,
} from '@angular/core/testing';
import {
  Jsonp,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import { MingleService } from './mingle.service';
import { Card } from './card';
import { MqlEncoderService } from './mql-encoder.service';

describe('MingleService', () => {
  let backend: MockBackend;
  let service: MingleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        MqlEncoderService,
        BaseRequestOptions,
        MockBackend,
        MingleService,
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Jsonp,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Jsonp(backend, defaultOptions);
          }
        }
      ]
    });

    const testbed = getTestBed();
    backend = testbed.get(MockBackend);
    service = testbed.get(MingleService);
  }));

  function setupConnections(backend: MockBackend, options: any) {
    backend.connections.subscribe((connection: MockConnection) => {
      const responseOptions = new ResponseOptions(options);
      const response = new Response(responseOptions);
      connection.mockRespond(response);
    });
  }

  describe('getCards', () => {
    it('should get cards from mingle', () => {
      setupConnections(backend, {
        body: [
          {
            'Number': '3717',
            'Name': 'Create a new topic page',
            'Status': 'Dev',
            'Owner': 'Arun',
            'Owner 2': 'JK'
          },
          {
            'Number': '3716',
            'Name': 'Update Leaders profile photo\'s',
            'Status': 'QA done',
            'Owner': 'Sravanthi',
            'Owner 2': 'Poornima'
          }
        ],
        status: 200
      });

      service.getCards().subscribe((cards) => {
        expect(cards).not.toEqual([]);
        expect(cards[0]).toEqual(jasmine.any(Card));
        expect(cards[1]).toEqual(jasmine.any(Card));
      });
    });

    it('should handle error', () => {
      setupConnections(backend, {
        body: {},
        status: 404
      });

      service.getCards().subscribe(cards => {
        expect(cards).not.toBeDefined();
      }, error => {
         expect(error).toBeDefined();
      });
    });
  });

  it('should get name of all the available lanes', () => {
    const lanes = service.getLaneNames();
    expect(lanes).not.toEqual([]);
    expect(lanes[0]).toEqual(jasmine.any(String));
  });

});
