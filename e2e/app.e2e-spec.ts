import { StorywallPage } from './app.po';

describe('storywall App', function() {
  let page: StorywallPage;

  beforeEach(() => {
    page = new StorywallPage();
  });

  it('should display page title as Story Wall', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Story Wall');
  });
});
