import { Component, OnInit } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { FoodService } from '../../services/Food/food.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-page',
  standalone: true,
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
  imports: [RouterLink, NavbarComponent, FooterComponent, CommonModule]
})
export class FoodPageComponent implements OnInit {
  food: Foods;
  loader = true;
  constructor(private fs: FoodService, private actRoute: ActivatedRoute, private cs: CartService, private router: Router) {
    actRoute.params.subscribe((params) => {
      if (params['id'])
        this.food = this.fs.getFoodId(params['id'])

      setTimeout(() => {
        this.loader = false;
      }, 2000);
    })
  }
  ngOnInit(): void {
  }

  addToCart() {
    this.cs.addToCart(this.food);
    this.router.navigateByUrl('/cartPage')
  }
}
