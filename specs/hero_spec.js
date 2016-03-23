var assert = require('chai').assert;
var Hero = require('../hero.js');
var Food = require('../food.js');

describe('Hero', function() {
  
 it('should have a name', function() {
    var hero1 = new Hero("Thor", 100, "steak");
    assert.equal("Thor", hero1.name);
  });

  it('should have health', function() {
    var hero1 = new Hero("Thor", 100, "steak");
    assert.equal(100, hero1.health);
  });

 it('should have favourite food', function() {
    var hero1 = new Hero("Thor", 100, "steak");
    assert.equal("steak", hero1.favFood);
  });

 it('should say his name', function() {
    var hero1 = new Hero("Thor", 100, "steak");
    assert.equal("I AM THOR", hero1.talk().toUpperCase());
  });
})