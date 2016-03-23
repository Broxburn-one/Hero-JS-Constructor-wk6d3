var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
};


Hero.prototype = {
  talk: function(){
    return ("I AM " + this.name);
  },
  eat: function(food) {
    if (food.name === this.favFood) {
      return this.health += (food.replenishmentValue * 1.5);
    } else {
      return this.health += food.replenishmentValue;
    }
} //eat
} // proto


module.exports = Hero;