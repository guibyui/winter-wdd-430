import { browser, by, element } from 'protractor';

export class appPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('cms-root .content span')).getText();
  }
}
