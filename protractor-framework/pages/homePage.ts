import {by, browser, ElementFinder, protractor} from "protractor";

export class HomePage {
    private header: ElementFinder;
    private searchBox: ElementFinder;
    private newsTab: ElementFinder;

    constructor() {
        this.header = browser.element(by.css(''));
        this.searchBox = browser.element(by.id('orb-search-q'));
        this.newsTab = browser.element(by.css('header > ol > li:nth-child(3)'));
    }

    async passTextToSearchBox(text: string) {
        await this.searchBox.sendKeys(text, protractor.Key.ENTER);

    }

}