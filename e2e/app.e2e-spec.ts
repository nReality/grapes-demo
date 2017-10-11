import { GrapeDemoPage } from './app.po';

describe('grape-demo App', () => {
  let page: GrapeDemoPage;

  beforeEach(() => {
    page = new GrapeDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
