import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { Foods } from '../../shared/models/food';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { FoodService } from '../../services/Food/food.service';

@Component({
  selector: 'app-all-food',
  standalone: true,
  templateUrl: './all-food.component.html',
  styleUrl: './all-food.component.css',
  imports: [NavbarComponent, FooterComponent, CommonModule, RouterLink, SearchComponent]
})
export class AllFoodComponent implements OnInit {
  foods: Foods[] = [];
  loader = true;

  constructor(private fs: FoodService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      else
        this.foods = this.fs.getAll();

      setTimeout(() => {
        this.loader = false;
      }, 2000);
    })
  }
}

