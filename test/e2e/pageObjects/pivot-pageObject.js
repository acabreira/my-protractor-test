module.exports = {
    objectLocator: {
        buttonSaskatoon: element(by.cssContainingText('span','Saskatoon')),
        allCategories: element.all(by.css('a.jss44')),
        livingLink: element(by.css('div.jss64')),
        // element(by.cssContainingText('a','Living')),
        allLivingItems: element.all(by.css('div.jss394 > a')),
    },

    getLocator: function () {
        return this.objectLocator
    },
}