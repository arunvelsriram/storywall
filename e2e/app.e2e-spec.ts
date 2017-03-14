import { StorywallPage } from './app.po';

describe('storywall App', function() {
  let page: StorywallPage;

  beforeEach(() => {
    page = new StorywallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
