module.exports = {

    objectLocators: {
        nameField: element(by.model('yourName')),
        todoField: element(by.model('todoList.todoText')),
        greetingField: element(by.binding('yourName')),
        allTodoField: element.all(by.repeater('todo in todoList.todos')),
        buttonAdd: element(by.css('input[value="add"]'))
    },

    getPageObjects: function () {
        return this.objectLocators
    },

    inputTextInNameField: function (text) {
        this.objectLocators.nameField.clear();
        this.objectLocators.nameField.sendKeys(text);

    },

    inputTodoNameField: function (text) {
        this.getPageObjects().todoField.clear();
        this.getPageObjects().todoField.sendKeys(text);
    },

    clickAddButton: function () {
        this.getPageObjects().buttonAdd.click();
    },

    getGreeting: function () {
        return this.objectLocators.greetingField.getText();
    },
}