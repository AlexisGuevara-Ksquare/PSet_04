
class Pizza {

  // Private class properties
  private _size: string;
  private _extraCheese: boolean;
  private _nPepperoniToppings: number;
  private _nHamToppings: number;
  private _nPineappleToppings: number;

  constructor(size: string, extraCheese: boolean, nPepperoniToppings: number, nHamToppings: number, nPineappleToppings: number) {
    this._size = size;
    this._extraCheese = extraCheese;
    this._nPepperoniToppings = nPepperoniToppings;
    this._nHamToppings = nHamToppings;
    this._nPineappleToppings = nPineappleToppings;
  }

  // getters and setter start
  get size(): string {
    return this._size;
  }

  set size(size: string) {
    this._size = size;
  }

  get extraCheese(): boolean {
    return this._extraCheese;
  }

  set extraCheese(extraCheese: boolean) {
    this._extraCheese = extraCheese;
  }

  get nPepperoniToppings(): number {
    return this._nPepperoniToppings;
  }

  set nPepperoniToppings(nPepperoniToppings: number) {
    this._nPepperoniToppings = nPepperoniToppings;
  }

  get nHamToppings(): number {
    return this._nHamToppings;
  }

  set nHamToppings(nHamToppings: number) {
    this._nHamToppings = nHamToppings;
  }

  get nPineappleToppings(): number {
    return this._nPineappleToppings;
  }

  set nPineappleToppings(nPineappleToppings: number) {
    this._nPineappleToppings = nPineappleToppings;
  }
  // Getters and setters end

  // Function to calculate cost
  public genCost(): number {
    // Initial cost
    let costPizza = 0;

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
  }
}

// create some Pizza objects to test the class
const pizzaSM = new Pizza("sm", true, 1, 1, 1);
console.log("Small Pizza cost: $" + pizzaSM.genCost());

const pizzaMD = new Pizza("md", true, 0, 1, 1);
console.log("Medium Pizza cost: $" + pizzaMD.genCost());

const pizzaLG = new Pizza("lg", false, 0, 0, 1);
console.log("Large: Pizza cost: $" + pizzaLG.genCost());

const pizzaXL = new Pizza("lg", false, 1, 1, 2);
console.log("Extra-Large Pizza cost: $" + pizzaXL.genCost());
