function Hamburger(size) {
    this.size = size;
    this.toppings = [];
  }
  
  Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20
  };
  
  Hamburger.SIZE_MEDIUM = {
    price: 75,
    calories: 30
  };
  
  Hamburger.SIZE_LARGE = {
    price: 100,
    calories: 40
  };
  
  Hamburger.TOPPING_CHEESE = {
    price: 10,
    calories: 20
  };
  
  Hamburger.TOPPING_LETTUCE = {
    price: 20,
    calories: 5
  };
  
  Hamburger.TOPPING_POTATO = {
    price: 15,
    calories: 10
  };
  
  Hamburger.TOPPING_SEASONING = {
    price: 15,
    calories: 0
  };
  
  Hamburger.TOPPING_MAYONNAISE = {
    price: 20,
    calories: 5
  };
  
  Hamburger.prototype.addTopping = function (topping) {
    this.toppings.push(topping);
  };
  
  Hamburger.prototype.getPrice = function () {
    let totalPrice = this.size.price;
    this.toppings.forEach(function (topping) {
      totalPrice += topping.price;
    });
    return totalPrice;
  };
  
  Hamburger.prototype.getCalories = function () {
    let totalCalories = this.size.calories;
    this.toppings.forEach(function (topping) {
      totalCalories += topping.calories;
    });
    return totalCalories;
  };
  
  // Пример использования:
  
  const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
  hamburger.addTopping(Hamburger.TOPPING_CHEESE);
  hamburger.addTopping(Hamburger.TOPPING_LETTUCE);
  hamburger.addTopping(Hamburger.TOPPING_POTATO);
  
  console.log('Price with toppings: ' + hamburger.getPrice() + ' тугриков');
  console.log('Calories with toppings: ' + hamburger.getCalories() + ' калорий');