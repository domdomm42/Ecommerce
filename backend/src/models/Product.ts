import User from "./User";

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  productDetails() {
    console.log(`Product name: ${this.name}, Product price: ${this.price}`);
  }

  addToCart(user: User) {
    console.log(`${this.name} added to ${user.name}'s cart`);
  }
}

export default Product;
