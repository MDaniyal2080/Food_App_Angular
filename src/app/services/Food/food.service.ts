import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodId(id: string): Foods {
    return this.getAll().find(food => food.id == id) ?? new Foods();
  }

  getAll(): Foods[] {
    return [
      {
        id: '1',
        img: "assets/img/p1.jpg",
        name: "HAWAIIAN PIZZA",
        desc: "Tomato sauce, mozzarella, ham & pineapple",
        price: 17,
        cooktime: "30min",
        deliverytime: "15min"
      },
      {
        id: '2',
        img: "assets/img/p2.jpg",
        name: "CHICKEN PIZZA",
        desc: "Tomato sauce, mozzarella, chicken, pineapple* & bbq sauce",
        price: 16,
        cooktime: "30min",
        deliverytime: "15min"
      }, {
        id: '3',
        img: "assets/img/p3.jpg",
        name: "SALAMI PIZZA",
        desc: "Tomato sauce, mozzarella & mild salami",
        price: 15,
        cooktime: "30min",
        deliverytime: "15min"
      }, {
        id: '4',
        img: "assets/img/p4.jpg",
        name: "ORIGINAL PIZZA",
        desc: "Tomato sauce, mozzarella & oregano",
        price: 18,
        cooktime: "30min",
        deliverytime: "15min"
      },
      {
        id: '5',
        img: "assets/img/fries.jpg",
        name: "FRENCH FRIES",
        desc: "Fries",
        price: 10,
        cooktime: "10min",
        deliverytime: "15min"
      },
      {
        id: '6',
        img: "assets/img/burger.jpg",
        name: "CHICKEN BURGER",
        desc: "Chicken Burger",
        price: 15,
        cooktime: "20min",
        deliverytime: "15min"
      }, {
        id: '7',
        img: "assets/img/sandwich.jpg",
        name: "CHICKEN SANDWICH",
        desc: "Chicken sandwich",
        price: 15,
        cooktime: "30min",
        deliverytime: "15min"
      }, {
        id: '8',
        img: "assets/img/soup.jpg",
        name: "CORN SOUP",
        desc: "Corn soup",
        price: 12,
        cooktime: "10min",
        deliverytime: "15min"
      },
      {
        id: '9',
        img: "assets/img/biryani.jpg",
        name: "BEEF BIRYANI",
        desc: "Beef Biryani",
        price: 20,
        cooktime: "15min",
        deliverytime: "15min"
      },
      {
        id: '10',
        img: "assets/img/pulao.jpg",
        name: "MUTTON PULAO",
        desc: "Mutton Pulao",
        price: 18,
        cooktime: "15min",
        deliverytime: "15min"
      }, {
        id: '11',
        img: "assets/img/p3.jpg",
        name: "SALAMI PIZZA",
        desc: "Tomato sauce, mozzarella & mild salami",
        price: 15,
        cooktime: "30min",
        deliverytime: "15min"
      }, {
        id: '12',
        img: "assets/img/p4.jpg",
        name: "ORIGINAL PIZZA",
        desc: "Tomato sauce, mozzarella & oregano",
        price: 18,
        cooktime: "30min",
        deliverytime: "15min"
      }, {
        id: '13',
        img: "assets/img/tikka.jpg",
        name: "CHICKEN TIKKA",
        desc: "Chicken Tikka",
        price: 18,
        cooktime: "30min",
        deliverytime: "15min"
      },
      {
        id: '14',
        img: 'assets/img/food-1.jpg',
        name: ' PIZZA PEPPERONI',
        desc: 'Pizza Pepperoni',
        cooktime: "30min",
        price: 10,
        deliverytime: "15min"
      },
      {
        id: '15',
        img: 'assets/img/food-2.jpg',
        name: 'MEATBALL',
        desc: 'Meatball',
        price: 20,
        cooktime: "30min",
        deliverytime: "15min"
      },
      {
        id: '16',
        img: 'assets/img/food-3.jpg',
        name: 'HAMBURGER',
        desc: 'Hamburger',
        price: 5,
        cooktime: "30min",
        deliverytime: "15min"

      },
      {
        id: '17',
        img: 'assets/img/food-4.jpg',
        name: 'FRIED POTATOES',
        desc: 'Fried Potatoes',
        price: 2,
        cooktime: "30min",

        deliverytime: "15min"
      },
      {
        id: '18',
        img: 'assets/img/food-5.jpg',
        name: 'CHICKEN SOUP',
        desc: 'Chicken Soup',
        price: 11,
        cooktime: "30min",


        deliverytime: "15min"
      },
      {
        id: '19',
        img: 'assets/img/food-6.jpg',
        name: 'VEGETABLES PIZZA',
        desc: 'Vegetables Pizza',
        price: 9,
        cooktime: "30min",


        deliverytime: "15min"

      },
      {
        id: '20',
        img: 'assets/img/food-7.jpg',
        name: 'SPICY CHEESE BURGER',
        desc: 'Spicy Cheese Burger',
        price: 12,
        cooktime: "30min",
        deliverytime: "15min"


      },
      {
        id: '21',
        img: 'assets/img/food-8.jpg',
        name: 'VEGETABLES MAGENTO PIZZA',
        desc: 'Vegetables Magento Pizza',
        price: 9,
        cooktime: "30min",
        deliverytime: "15min"


      },
    ]

  }
}
