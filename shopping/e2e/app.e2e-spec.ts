import { ShoppingPage } from './app.po';

describe('shopping App', () => {
  let page: ShoppingPage;

  beforeEach(() => {
    page = new ShoppingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
