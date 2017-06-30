import { SliderPage } from './app.po';

describe('slider App', () => {
  let page: SliderPage;

  beforeEach(() => {
    page = new SliderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
