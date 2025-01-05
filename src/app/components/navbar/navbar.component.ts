import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from '../../shared/models/cart';
import { CartService } from '../../services/cart/cart.service';
import { CartItem2 } from '../../shared/models/cartItem2';
import { Cart2Service } from '../../services/cart2/cart2.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cartQuantity = 0;
  totalQuantity: number = 0;
  cartItem2: CartItem2[] = [];

  ngOnInit(): void {

  }

  constructor(cartService: CartService, private cartService2: Cart2Service) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    this.cartItem2 = this.cartService2.getCartItems();

    this.quantity()
  }

  quantity() {
    this.totalQuantity = this.cartItem2.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
    console.log("Total quantity Sum:", this.totalQuantity);

  }
}
