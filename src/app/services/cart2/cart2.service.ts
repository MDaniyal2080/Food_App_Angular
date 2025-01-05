import { Injectable } from '@angular/core';
import { CartItem2 } from '../../shared/models/cartItem2';

@Injectable({
  providedIn: 'root'
})
export class Cart2Service {
  private cartItem2: CartItem2[] = [];

  constructor() {
    const storedItems = localStorage.getItem('custom');
    if (storedItems) {
      this.cartItem2 = JSON.parse(storedItems);
    }
  }

  getCartItems(): CartItem2[] {
    return this.cartItem2;
  }

  addToCart(item: CartItem2): void {
    this.cartItem2.push(item);
    this.updateLocalStorage();
  }

  removeFromCart(index: number): void {
    this.cartItem2.splice(index, 1);
    this.updateLocalStorage();
  }

  EmptyCart() {
    this.cartItem2 = [];
    this.updateLocalStorage();
  }

  updateLocalStorage(): void {
    localStorage.setItem('custom', JSON.stringify(this.cartItem2));
  }
}
