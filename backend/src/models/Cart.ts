import Product from "./Product.js";
import User from "./User";

class Cart {
  private _user: User;
  private _products: Product[];
  private _total: number;
  private _numItems: number;

  constructor(user: User) {
    this._user = user;
    this._products = [];
    this._total = 0;
    this._numItems = 0;
  }

  addToCart(product: Product) {
    this._products.push(product);
    this._total += product.price;
    this._numItems++;
    console.log(`${product.name} added to ${this._user.name}'s cart`);
  }

  removeFromCart(product: Product) {
    this._products = this._products.filter((p) => p.name !== product.name);
    this._total -= product.price;
    this._numItems--;
    console.log(`${product.name} removed from ${this._user.name}'s cart`);
  }

  printCart() {
    console.log(
      `${this._user.name}'s cart: ${this._products.map(
        (product) => product.name
      )}`
    );
    console.log(`Total: ${this._total}`);
    console.log(`Number of items: ${this._numItems}`);
  }
}

export default Cart;
