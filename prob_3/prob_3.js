var Pizza = /** @class */ (function () {
    function Pizza(size, extraCheese, nPepperoniToppings, nHamToppings, nPineappleToppings) {
        this._size = size;
        this._extraCheese = extraCheese;
        this._nPepperoniToppings = nPepperoniToppings;
        this._nHamToppings = nHamToppings;
        this._nPineappleToppings = nPineappleToppings;
    }
    Object.defineProperty(Pizza.prototype, "size", {
        // getters and setter start
        get: function () {
            return this._size;
        },
        set: function (size) {
            this._size = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "extraCheese", {
        get: function () {
            return this._extraCheese;
        },
        set: function (extraCheese) {
            this._extraCheese = extraCheese;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "nPepperoniToppings", {
        get: function () {
            return this._nPepperoniToppings;
        },
        set: function (nPepperoniToppings) {
            this._nPepperoniToppings = nPepperoniToppings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "nHamToppings", {
        get: function () {
            return this._nHamToppings;
        },
        set: function (nHamToppings) {
            this._nHamToppings = nHamToppings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "nPineappleToppings", {
        get: function () {
            return this._nPineappleToppings;
        },
        set: function (nPineappleToppings) {
            this._nPineappleToppings = nPineappleToppings;
        },
        enumerable: false,
        configurable: true
    });
    // Getters and setters end
    // Function to calculate cost
    Pizza.prototype.genCost = function () {
        // Initial cost
        var costPizza = 0;
        // Add cost if and ingredient is select and added to the order
        switch (this._size) {
            case "sm":
                costPizza += 10;
                costPizza += 2 * (this._nPepperoniToppings + this._nHamToppings + this._nPineappleToppings);
                if (this._extraCheese) {
                    costPizza += 2;
                }
                break;
            case "md":
                costPizza += 12;
                costPizza += 2 * (this._nPepperoniToppings + this._nHamToppings + this._nPineappleToppings);
                if (this._extraCheese) {
                    costPizza += 4;
                }
                break;
            case "lg":
                costPizza += 14;
                costPizza += 3 * (this._nPepperoniToppings + this._nHamToppings + this._nPineappleToppings);
                if (this._extraCheese) {
                    costPizza += 6;
                }
                break;
            case "xl":
                costPizza += 18;
                costPizza += 4 * (this._nPepperoniToppings + this._nHamToppings + this._nPineappleToppings);
                if (this._extraCheese) {
                    costPizza += 6;
                }
                break;
            default:
                // Invalid input
                throw new Error("Invalid size...");
        }
        return costPizza;
    };
    return Pizza;
}());
// create some Pizza objects to test the class
var pizzaSM = new Pizza("sm", true, 1, 1, 1);
console.log("Small Pizza cost: $" + pizzaSM.genCost());
var pizzaMD = new Pizza("md", true, 0, 1, 1);
console.log("Medium Pizza cost: $" + pizzaMD.genCost());
var pizzaLG = new Pizza("lg", false, 0, 0, 1);
console.log("Large: Pizza cost: $" + pizzaLG.genCost());
var pizzaXL = new Pizza("lg", false, 1, 1, 2);
console.log("Extra-Large Pizza cost: $" + pizzaXL.genCost());
