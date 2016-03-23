var assert = require('chai').assert;
var Hero = require('../hero.js');
var Food = require('../food.js');

describe("Food", function() {

  it('should have a name' , function() {
    var food1 = new Food("spinach", 100);
    assert.equal("spinach", food1.name);
  });

    it('should have a replenishment value' , function() {
    var food1 = new Food("spinach", 100);
    assert.equal(100, food1.replenishmentValue);
  });
})