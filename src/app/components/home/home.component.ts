import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FoodService } from '../../services/Food/food.service';
import { Foods } from '../../shared/models/food';
import { SearchComponent } from '../search/search.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgSliderComponent } from '../img-slider/img-slider.component';
import { FooterComponent } from '../footer/footer.component';
import { AdsComponent } from "../ads/ads.component";


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, RouterLink, SearchComponent, NavbarComponent, ImgSliderComponent, FooterComponent, AdsComponent]
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  loader = true;
  slides: any[] = [
    {
      url: 'assets/img/food-1.jpg',
      title: 'First slide',
      description: 'This is the first slide',
    },
    {
      url: 'assets/img/food-2.jpg',
      title: 'Second slide',
      description: 'This is the second slide',
    },
    {
      url: 'assets/img/food-3.jpg',
      title: 'Third slide',
      description: 'This is the third slide',
    },
    {
      url: 'assets/img/food-4.jpg',
      title: 'Fourth slide',
      description: 'This is the fourth slide',
    },
    {
      url: 'assets/img/food-5.jpg',
      title: 'Fifth slide',
      description: 'This is the fifth slide',
    },
  ];

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
