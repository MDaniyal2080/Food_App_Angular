import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../services/Food/food.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchItem: string = '';

  constructor(private actRoute: ActivatedRoute, private route: Router, private fs: FoodService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      if (params['searchItem'])
        this.searchItem = params['searchItem'];
    });
  }

  search(): void {
    if (this.searchItem) {
      this.route.navigateByUrl("allfood/search/" + this.searchItem);
    }
    if (this.searchItem === '') {
      this.fs.getAll();
    }
  }

}
