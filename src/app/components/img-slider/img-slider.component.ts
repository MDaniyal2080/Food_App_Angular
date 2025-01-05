import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../../services/Food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../../shared/models/food';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-img-slider',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './img-slider.component.html',
  styleUrl: './img-slider.component.css'
})
export class ImgSliderComponent implements OnInit {
  foods: Foods[] = [];
  @Input() slides: any[] = [];
  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 1000;
  @Input() autoPlay = false;
  @Input() autoPlaySpeed = 5000;
  currentSlide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  ngOnInit(): void {
    this.foods = this.fs.getAll();

    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlaySpeed);
    }
  }

  constructor(private fs: FoodService) { }

  next() {
    let currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  previous() {
    let currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }
}
