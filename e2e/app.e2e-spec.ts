import { FaizAngularAppPage } from './app.po';

describe('faiz-angular-app App', function() {
  let page: FaizAngularAppPage;

  beforeEach(() => {
    page = new FaizAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
