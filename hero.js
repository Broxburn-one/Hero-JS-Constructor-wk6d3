var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
};


Hero.prototype = {
  talk: function(){
    return ("I AM " + this.name);
  }
}


module.exports = Hero;