import { browser } from 'protractor';

export class StorywallPage {
  navigateTo() {
		return browser.get('/');
  }

  getTitle() {
		return browser.getTitle();
  }
}
