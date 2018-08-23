var samplePageObjects = require('../pageObjects/sample-pageObect.js');

describe('angularjs homepage', function() {
  var name = 'Antonio'
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');
    expect(samplePageObjects.getPageObjects().nameField.isPresent()).toBeTruthy();

    samplePageObjects.inputTextInNameField(name);

    expect(samplePageObjects.getGreeting().getText()).toEqual('Hello ' + name + '!');
  });
});