import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, Time } from '@angular/common';
import { Cart } from '../../shared/models/cart';
import { CartService } from '../../services/cart/cart.service';
import { Router, RouterLink } from '@angular/router';
import { CartItem2 } from '../../shared/models/cartItem2';
import { Cart2Service } from '../../services/cart2/cart2.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})

export class CheckoutComponent implements OnInit {
  loader = true;
  cart!: Cart;
  currentDate: Date = new Date();
  currentTime: string;
  cartQuantity: number;
  localStorageData: any;
  localStorageData2: any;
  cardPaymentChecked: boolean = false;
  cashOnDeliveryChecked: boolean = false;
  onlinePaymentChecked: boolean = false;
  cartItem2: CartItem2[] = [];
  totalPriceSum: number = 0;
  totalQuantity: number = 0;
  loc: string = '';
  address: string = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 2000);

    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  constructor(private cartService: CartService, private router: Router, private cart2Service: Cart2Service) {
    this.getLocalStorageData();
    this.getLocalStorageData2();

    this.cartItem2 = this.cart2Service.getCartItems();
    this.price()
    this.quantity()

    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })

    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
  }

  price() {
    this.totalPriceSum = this.cartItem2.reduce((sum, cartItem2) => sum + cartItem2.price, 0);
    console.log("Total Price Sum:", this.totalPriceSum);
  }

  quantity() {
    this.totalQuantity = this.cartItem2.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
    console.log("Total quantity Sum:", this.totalQuantity);

  }

  getLocalStorageData(): void {
    var data = localStorage.getItem('Cart');
    if (data != null) {
      this.localStorageData = JSON.parse(data);
      const data2 = JSON.parse(data)
      console.log(data2)
    }
  }

  getLocalStorageData2(): void {
    var data = localStorage.getItem('location');
    if (data != null) {
      this.localStorageData2 = JSON.parse(data);
      const data2 = JSON.parse(data)
      console.log(data2)
    }
  }


  onPaymentChange(event: any) {
    if (event.target.value === 'cardPayment') {
      this.cardPaymentChecked = true;
    } else {
      this.cardPaymentChecked = false;
    }


  }



  Confirmed() {

    const trimmedValue = this.loc.trim();
  
    if (trimmedValue !== "" ) {
      
      localStorage.setItem('Address', JSON.stringify(trimmedValue));
      console.log(trimmedValue);
      this.cartService.clearCart();
      this.cart2Service.EmptyCart();
      this.router.navigateByUrl('/confirmOrder');
    } else {
      alert('Please fill in the additional location.');
    }      

  }

  updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    this.currentTime = `${hours}:${minutes} ${ampm}`;
  }
}
