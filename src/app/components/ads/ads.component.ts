import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/Food/food.service';
import { Foods } from '../../shared/models/food';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.css'
})
export class AdsComponent implements OnInit {
  loader = true;
  foods: Foods[] = [];
  constructor(private fs: FoodService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 2000);

    this.foods = this.fs.getAll();
  }
}
