var assert = require('chai').assert;
var Hero = require('../hero.js');
var Food = require('../food.js');
var Rat = require('../rat.js');

describe("Food", function() {

  it('should have a name' , function() {
    var food1 = new Food("spinach", 100);
    assert.equal("spinach", food1.name);
  });

  it('should have a replenishment value' , function() {
     var food1 = new Food("spinach", 100);
     assert.equal(100, food1.replenishmentValue);
  });

  // it ('should have nonpoisonous status', function() {
  //   var food1 = new Food('spinach', 100);
  //   assert.equal(false, food1.isPoisonous())
  // });

  it('should have a poisonous status', function() {
    var food1 = new Food("spinach", 100);
    var food2 = new Food("steak", 100);
    var rat1 = new Rat("dirty");
    food2.hasTouchedRat(rat1);

    assert.equal(true, food2.poisonous);
  });


})