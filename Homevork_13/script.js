const SMALL = Hamburger.SIZE_SMALL = { price: 50, callories: 20};
const MIDDLE = Hamburger.SIZE_MIDDLE = { price: 75, callories: 30};
const BIG = Hamburger.SIZE_BIG = { price: 100, callories: 40 };

const CHEESE = Hamburger.TOPPING_CHEESE = { price: 10, callories: 20 };
const SALAD = Hamburger.TOPPING_SALAD = { price: 20, callories: 5};
const POTATO = Hamburger.TOPPING_POTATO = { price: 15, callories: 10};
const SPICES = Hamburger.TOPPING_SPICES = { price: 15, callories: 0};
const MAYO = Hamburger.TOPPING_MAYO = { price: 20, callories: 5};

function Hamburger(size) {
    this.totalCallories = size.callories;
    this.totalPrice = size.price;
    }
            
Hamburger.prototype.addTopping = function (topping) {
    this.totalCallories += topping.callories;
    this.totalPrice += topping.price;
    }
        
Hamburger.prototype.getCallories = function () {
    return this.totalCallories;
}

Hamburger.prototype.getPrice = function () {
    return this.totalPrice;
}
    



