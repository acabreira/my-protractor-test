var pivotPageObjects = require('../pageObjects/pivot-pageObject.js');

describe("pivot", function () {

    beforeEach(function() {
        browser.ignoreSynchronization = true; //used for non-angular apps
    });

    it('should navigate to saskatoon page', function () {
        browser.get('https://www.pivotsubscriptions.com/ca/en/');
        pivotPageObjects.getLocator().buttonSaskatoon.click();
        pivotPageObjects.getLocator().allCategories.getText().then(function (text) {
            console.log(text);
            expect(text).toContain('Living');
        });
    });
});
