import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getNavText() {
    return element(by.css('app-nav small')).getText();
  }

  getToolbarContents() {
    return element.all(by.css('app-content-toolbar small'));
  }
}
