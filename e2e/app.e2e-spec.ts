import { NgGfxDemosPage } from './app.po';

describe('ng-gfx-demos App', function() {
  let page: NgGfxDemosPage;

  beforeEach(() => {
    page = new NgGfxDemosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
