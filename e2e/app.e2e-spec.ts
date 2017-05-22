import { SimpleMessengerPage } from './app.po';

describe('simple-messenger App', () => {
  let page: SimpleMessengerPage;

  beforeEach(() => {
    page = new SimpleMessengerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
