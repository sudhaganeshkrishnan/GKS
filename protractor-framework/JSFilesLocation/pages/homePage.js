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
const protractor_1 = require("protractor");
class HomePage {
    constructor() {
        this.header = protractor_1.browser.element(protractor_1.by.css(''));
        this.searchBox = protractor_1.browser.element(protractor_1.by.id('orb-search-q'));
    }
    passTextToSearchBox(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchBox.sendKeys(text, protractor_1.protractor.Key.ENTER);
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9ob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFrRTtBQUVsRSxNQUFhLFFBQVE7SUFJakI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUssbUJBQW1CLENBQUMsSUFBWTs7WUFDbEMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsdUJBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUQsQ0FBQztLQUFBO0NBRUo7QUFkRCw0QkFjQyJ9