import { Component, OnInit } from '@angular/core';
import { Cart } from '../../shared/models/cart';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../shared/models/cartItem';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";
import { CartItem2 } from '../../shared/models/cartItem2';
import { Cart2Service } from '../../services/cart2/cart2.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent]
})
export class CartPageComponent implements OnInit {

  cart!: Cart;
  loader = true;
  cartItem: CartItem;
  cartQuantity = 0;
  localStorageData: any;
  totalPrice: number;
  cartItem2: CartItem2[] = [];
  totalPriceSum: number = 0;
  totalQuantity: number = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  constructor(private cartService: CartService, private router: Router, private cart2Service: Cart2Service) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })

    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    this.cartItem2 = this.cart2Service.getCartItems();

    this.getLocalStorageData();
    this.price()
    this.quantity()
  }

  price() {
    this.totalPriceSum = this.cartItem2.reduce((sum, cartItem) => sum + cartItem.price, 0);
    console.log("Total Price Sum:", this.totalPriceSum);
  }

  quantity() {
    this.totalQuantity = this.cartItem2.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
    console.log("Total quantity Sum:", this.totalQuantity);
  }

  removeFromCart2(index: number): void {
    this.cart2Service.removeFromCart(index);
    this.cartItem2 = this.cart2Service.getCartItems();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  getLocalStorageData(): void {
    var data = localStorage.getItem('Custom');
    if (data != null) {
      this.localStorageData = JSON.parse(data);
      const data2 = JSON.parse(data)
      console.log(data2)
    }
  }

  increase(cartItem: CartItem): void {
    this.cartService.incrementQuantity(cartItem.food.id);
  }

  decrease(cartItem: CartItem): void {
    this.cartService.decrementQuantity(cartItem.food.id);
  }

  CartRemove() {
    this.router.navigateByUrl('/checkout')
  }

}


