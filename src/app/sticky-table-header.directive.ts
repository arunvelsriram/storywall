import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[stickyTableHeader]'
})
export class StickyTableHeaderDirective {

	constructor(private el: ElementRef) {}

	ngAfterViewInit() {
		$(this.el.nativeElement).stickyTableHeaders();
	}

}
