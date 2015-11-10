/*eslint-disable*/
var expect = require('chai').expect;
var is = require('../lib/is/index');
Array.isArray = null;

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });

  describe('is.array', function () {
    it('should return true if passed argument type is Array', function () {
      expect(is.array(['value1', 'value2'])).to.be.true;
    });
    it('should return false if passed argument type is not Array', function () {
      expect(is.array('yassine')).to.be.false;
    });
  });

  describe('is.whoWillBeLigue1Champion', function () {
    it('should return PSG in uppercase', function() {
      expect(is.whoWillBeLigue1Champion()).to.be.equal('PSG');
    });
  });
});
