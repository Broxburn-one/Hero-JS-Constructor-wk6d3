var assert = require('chai').assert;
var Hero = require('../hero.js');
var Food = require('../food.js');
var Rat = require('../rat.js');

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

   it('should increase health by eating' , function(){
      var hero1 = new Hero("Thor", 100, "steak");
      var food1 = new Food("spinach", 100);
      hero1.eat(food1);
      assert.equal(200, hero1.health)
  }); 

   it('should increase health by 1.5 if fave food', function() {
      var hero1 = new Hero("Thor", 100, "steak");
      var food2 = new Food("steak", 100);
      var rat1 = new Rat("dirty");
      hero1.eat(food2);
      assert.equal(250, hero1.health)
   });

   it('should lose health if eating poisonous food', function() {
        var hero1 = new Hero("Thor", 100, "steak");
        var food2 = new Food("steak", 100);
        var rat1 = new Rat("dirty");
        food2.hasTouchedRat(rat1);
        hero1.eat(food2);

        assert.equal(50, hero1.health);


    });
})