//this class is a product class that has a method to calculate the price and has a personal care products that extends it.
class Product {
  constructor(productId, productName, productPrice) {
    this.productId = productId;
    this.productName = productName;
    this.productPrice = productPrice;
  }
  calculateTotalPrice(quantity) {
    return this.productPrice * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(productId, productName, productPrice, warrantyCost) {
    super(productId, productName, productPrice);
    this.warrantyCost = warrantyCost;
  }
  calculateTotalPrice(quantity) {
    return (this.productPrice + this.warrantyCost) * quantity;
  }
}

const joySpa = new PersonalCareProduct(1, "eva soap", 400, 2);
const joySpat = new Product(1, "eva soap", 400);

console.log(joySpa.calculateTotalPrice(4));
console.log(joySpat.calculateTotalPrice(4));
