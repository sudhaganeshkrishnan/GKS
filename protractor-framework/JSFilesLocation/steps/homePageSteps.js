"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
// var {defineSupportCode} = require('cucumber');
const HomePage_1 = require("../pages/HomePage");
let homePage = new HomePage_1.HomePage();
cucumber_1.defineSupportCode(({ Given, When, Then }) => {
    When('I navigate to the home page', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.waitForAngularEnabled(false);
            yield protractor_1.browser.get('https://www.bbc.co.uk/');
            // browser.waitForAngularEnabled(true);
        });
    });
    When('I enter the text News in the search box', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield homePage.passTextToSearchBox('News');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2VTdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBzL2hvbWVQYWdlU3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsMkNBQW1DO0FBQ25DLGlEQUFpRDtBQUNqRCxnREFBMkM7QUFFM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFHOUIsNEJBQWlCLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUUsRUFBRTtJQUN0QyxJQUFJLENBQUMsNkJBQTZCLEVBQUU7O1lBQ2hDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzVDLHVDQUF1QztRQUMzQyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLHlDQUF5QyxFQUFFOztZQUM1QyxNQUFNLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==