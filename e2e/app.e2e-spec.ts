import { A2KnowledgeSharingPage } from './app.po';

describe('a2-knowledge-sharing App', () => {
  let page: A2KnowledgeSharingPage;

  beforeEach(() => {
    page = new A2KnowledgeSharingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
