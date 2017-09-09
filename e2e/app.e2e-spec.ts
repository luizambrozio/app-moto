import { AppMotoPage } from './app.po';

describe('app-moto App', () => {
  let page: AppMotoPage;

  beforeEach(() => {
    page = new AppMotoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
