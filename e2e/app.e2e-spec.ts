import { ArtistasAppPage } from './app.po';

describe('artistas-app App', function() {
  let page: ArtistasAppPage;

  beforeEach(() => {
    page = new ArtistasAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
