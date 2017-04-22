import { TestBed, inject } from '@angular/core/testing';

import { MqlEncoderService } from './mql-encoder.service';

describe('MqlEncoderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MqlEncoderService]
    });
  });

  it('should ...', inject([MqlEncoderService], (service: MqlEncoderService) => {
    expect(service).toBeTruthy();
  }));

  it('should encode any mql', inject([MqlEncoderService], (service: MqlEncoderService) => {
  	const encoded = service.encode('SELECT number, name, status');

    expect(encoded).toEqual('SELECT%20number,%20name,%20status');
  }));

  it('should encode mql with single quotes', inject([MqlEncoderService], (service: MqlEncoderService) => {
  	const encoded = service.encode(`SELECT number, owner, 'owner 2'`);

    expect(encoded).toEqual("SELECT%20number,%20owner,%20'owner%202'");
  }));

	it("should encode mql and replace '&' with '%26' - to prevent parts of mql being considered as URL query params",
		inject([MqlEncoderService], (service: MqlEncoderService) => {
		const encoded = service.encode("SELECT number, status WHERE status in ('Next', 'A & D', 'A & D done')");

    expect(encoded).toEqual("SELECT%20number,%20status%20WHERE%20status%20in%20('Next',%20'A%20%26%20D',%20'A%20%26%20D%20done')");
  }));

});
