import {defineSupportCode} from 'cucumber';
import {browser} from "protractor";
// var {defineSupportCode} = require('cucumber');
import {HomePage} from '../pages/HomePage';

let homePage = new HomePage();


defineSupportCode(({Given, When, Then}) => {
    When('I navigate to the home page', async function () {
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.bbc.co.uk/');
        // browser.waitForAngularEnabled(true);
    });

    When('I enter the text (.*) in the search box', async function (text: string) {
        await homePage.passTextToSearchBox('News');
    });

    When('I select the (.*)', async function (tabName: string) {

    });

});
