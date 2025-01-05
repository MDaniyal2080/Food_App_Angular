import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFoodComponent } from './all-food.component';

describe('AllFoodComponent', () => {
  let component: AllFoodComponent;
  let fixture: ComponentFixture<AllFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
