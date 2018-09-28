import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('test this!');
  });

  it('should display nav message', () => {
    page.navigateTo();
    expect(page.getNavText()).toEqual('[nav]');
  });

  it('should display toolbar content', () => {
    page.navigateTo();
    expect(page.getToolbarContents().count()).toBe(2);
    let result = page.getToolbarContents().first().getText();
    expect(result).toBe('doc-list');
    result = page.getToolbarContents().last().getText();
    expect(result).toBe('123-ABC');
  });
});
