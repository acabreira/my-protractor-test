module.exports = {

    objectLocators: {
        nameField: element(by.model('yourName')),
        greetingField: element(by.binding('yourName'))
    },

    getPageObjects: function () {
        return this.objectLocators
    },

    inputTextInNameField: function (text) {
        this.objectLocators.nameField.clear();
        this.objectLocators.nameField.sendKeys(text);

    },

    getGreeting: function () {
        return this.objectLocators.greetingField.getText();
    },
}