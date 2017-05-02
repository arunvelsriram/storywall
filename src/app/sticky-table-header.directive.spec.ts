import { Directive, ElementRef } from '@angular/core';

import { StickyTableHeaderDirective } from './sticky-table-header.directive';

describe('StickyTableHeaderDirective', () => {
	let el: ElementRef;

	beforeAll(() => {
		el = {
			nativeElement: 'some-element'
		}
	});

	it('should create an instance', () => {
    const directive = new StickyTableHeaderDirective(el);

    expect(directive).toBeTruthy()
  });

  it('should setup jquery sticky table header on element', () => {
  	spyOn($.fn, 'stickyTableHeaders')

    const directive = new StickyTableHeaderDirective(el);
    directive.ngAfterViewInit();

    expect($('some-element').stickyTableHeaders).toHaveBeenCalled()
  });
});
