import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../../shared/models/cart';
import { Foods } from '../../shared/models/food';
import { CartItem } from '../../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(food: Foods): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      this.incrementQuantity(food.id);
      return;
    }

    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  addToCartCustomPizza(customPizza: any): void {
    this.cart.items.push(customPizza);
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    this.setCartToLocalStorage();
  }

  incrementQuantity(foodId: string): void {
    const itemToUpdate = this.cart.items.find(item => item.food.id === foodId);
    if (itemToUpdate) {
      itemToUpdate.quantity += 1;
      itemToUpdate.price = itemToUpdate.quantity * itemToUpdate.food.price;
      this.setCartToLocalStorage();
    }
  }

  decrementQuantity(foodId: string): void {
    const itemToUpdate = this.cart.items.find(item => item.food.id === foodId);
    if (itemToUpdate && itemToUpdate.quantity > 1) {
      itemToUpdate.quantity -= 1;
      itemToUpdate.price = itemToUpdate.quantity * itemToUpdate.food.price;
      this.setCartToLocalStorage();
    }
  }

  clearCart(): void {
    this.cart.items = [];
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

  CartRemove(): void {
    this.cart.items = [];
    this.setCartToLocalStorage();
  }

  getDataFromLocalStorage(): any {
    const data = localStorage.getItem('cart');
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }
}
