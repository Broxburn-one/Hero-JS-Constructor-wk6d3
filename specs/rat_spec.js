var assert = require('chai').assert;
var Rat = require('../rat.js');
var Food = require('../food.js');

describe('Rat', function() {

 it('should have a type', function() {
    var rat1 = new Rat("dirty");
    assert.equal("dirty", rat1.type);
  
  });

})