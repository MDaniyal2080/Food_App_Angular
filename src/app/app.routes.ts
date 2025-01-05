import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ImgSliderComponent } from './components/img-slider/img-slider.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllFoodComponent } from './components/all-food/all-food.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { CustomPizzaComponent } from './components/custom-pizza/custom-pizza.component';
import { MapComponent } from './components/map/map.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent },
    { path: 'allfood/search/:searchItem', component: AllFoodComponent },
    { path: 'food/:id', component: FoodPageComponent },
    { path: 'cartPage', component: CartPageComponent },
    { path: 'slider', component: ImgSliderComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'allfood/search', component: AllFoodComponent },
    { path: 'confirmOrder', component: ConfirmOrderComponent },
    { path: 'Custom', component: CustomPizzaComponent },
    { redirectTo: 'home', path: '', pathMatch: 'full' }
];
