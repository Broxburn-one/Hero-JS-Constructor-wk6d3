var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.superPower = 'Talks your ears off.';
};


Hero.prototype = {
  talk: function(){
    return ("I AM " + this.name);
  },
  eat: function(food) {
    if (food.poisonous === true) {
      this.health -= 50;
    } else {
         if (food.name === this.favFood) {
           return this.health += (food.replenishmentValue * 1.5);
        } else {
           return this.health += food.replenishmentValue;
      }
    } 
 } 
} // proto


module.exports = Hero;