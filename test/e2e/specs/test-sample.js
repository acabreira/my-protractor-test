var samplePageObjects = require('../pageObjects/sample-pageObect.js');

describe('angularjs homepage', function() {
  var name = 'test'
  it('should greet the named user @smoke', function() {
    browser.get('http://www.angularjs.org');
    expect(samplePageObjects.getPageObjects().nameField.isPresent()).toBeTruthy();
    samplePageObjects.inputTextInNameField(name);
    expect(samplePageObjects.getGreeting().getText()).toEqual('Hello ' + name + '!');
  });

  it('should add todo list', function () {
    samplePageObjects.inputTodoNameField('add');
    samplePageObjects.clickAddButton();
    expect(samplePageObjects.getPageObjects().allTodoField.getText()).toContain('add');
  });
});