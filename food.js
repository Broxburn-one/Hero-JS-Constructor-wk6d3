var Food = function(name, replenishmentValue) {
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisonous = false;   // default

// method

  // this.isPoisonous(){
  //   return this.poisonous;
  // }



  this.hasTouchedRat = function(rat){
    if (typeof rat === 'undefined') {
      return this.poisonous = false; 
    } else {
        return this.poisonous = true;
    }
  
}

};




module.exports = Food;