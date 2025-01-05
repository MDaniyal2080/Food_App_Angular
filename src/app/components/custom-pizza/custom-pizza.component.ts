import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { Pizza } from '../../shared/models/pizza';
import { Cart2Service } from '../../services/cart2/cart2.service';
import { CartItem2 } from '../../shared/models/cartItem2';
import { Router, RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-custom-pizza',
  templateUrl: './custom-pizza.component.html',
  standalone: true,
  styleUrls: ['./custom-pizza.component.css'],
  imports: [CommonModule, FormsModule, NavbarComponent, RouterLink, MatFormFieldModule, MatSelectModule]
})
export class CustomPizzaComponent implements OnInit {
  selectedPizza: Pizza = { id: 1, size: '', flavor: '', crust: '', extras: '' };
  quantity: number = 1;
  totalPrice: number = 0;
  loader = true

  constructor(private cart2Service: Cart2Service, private router: Router) { }

  ngOnInit(): void {
    this.selectedPizza.crust = 'Select Crust'
    this.selectedPizza.flavor = 'Select Flavor'
    this.selectedPizza.size = 'Select Size'

    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  calculatePrice(): void {
    if (this.quantity < 1) {
      this.quantity = 1;
    }
    const sizePrices: { [key: string]: number } = {
      Small: 8,
      Medium: 10,
      Large: 12
    };

    const flavorPrices: { [key: string]: number } = {
      Cheese: 10,
      Pepperoni: 8,
      Vegetarian: 8,
      Tikka: 10,
      Margherita: 9,
      Creamy: 9,
      BBQ: 10,
      Fajita: 8,
      Veggie: 6,
    };

    const crustPrices: { [key: string]: number } = {
      Thin: 2,
      Thick: 4,
      Stuffed: 5
    };

    const extrasPrices: { [key: string]: number } = {
      Mushrooms: 2,
      Onions: 2,
      Chicken: 5,
      Sauces: 4,
      Tomatos: 2,
      Cucumber: 2
    };

    let totalPrice = 0;

    if (this.selectedPizza.size && Array.isArray(this.selectedPizza.size)) {
      this.selectedPizza.size.forEach((sizeOption: string) => {
        if (sizePrices[sizeOption]) {
          totalPrice += sizePrices[sizeOption];
        }
      });
    } else if (sizePrices[this.selectedPizza.size]) {
      totalPrice += sizePrices[this.selectedPizza.size];
    }

    if (this.selectedPizza.flavor && Array.isArray(this.selectedPizza.flavor)) {
      this.selectedPizza.flavor.forEach((flavorOption: string) => {
        if (flavorPrices[flavorOption]) {
          totalPrice += flavorPrices[flavorOption];
        }
      });
    } else if (flavorPrices[this.selectedPizza.flavor]) {
      totalPrice += flavorPrices[this.selectedPizza.flavor];
    }

    if (this.selectedPizza.crust && Array.isArray(this.selectedPizza.crust)) {
      this.selectedPizza.crust.forEach((crustOption: string) => {
        if (crustPrices[crustOption]) {
          totalPrice += crustPrices[crustOption];
        }
      });
    } else if (crustPrices[this.selectedPizza.crust]) {
      totalPrice += crustPrices[this.selectedPizza.crust];
    }

    if (this.selectedPizza.extras && Array.isArray(this.selectedPizza.extras)) {
      this.selectedPizza.extras.forEach((extrasOption: string) => {
        if (extrasPrices[extrasOption]) {
          totalPrice += extrasPrices[extrasOption];
        }
      });
    } else if (extrasPrices[this.selectedPizza.extras]) {
      totalPrice += extrasPrices[this.selectedPizza.extras];
    }

    this.totalPrice = totalPrice * this.quantity;
  }

  addToCart(): void {
    if (this.selectedPizza.size === 'Select Size' || this.selectedPizza.flavor === 'Select Flavor' || this.selectedPizza.crust === 'Select Crust') {
      alert('Please select all options before adding to cart.');
      return;
    }
    else {
      this.calculatePrice();
      const cartItem: CartItem2 = { pizza: this.selectedPizza, quantity: this.quantity, price: this.totalPrice };
      this.cart2Service.addToCart(cartItem);
      this.router.navigateByUrl('/cartPage')
    }
  }
}
