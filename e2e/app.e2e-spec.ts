import { LoslenosPage } from './app.po';

describe('loslenos App', () => {
  let page: LoslenosPage;

  beforeEach(() => {
    page = new LoslenosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
