import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';
@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  

  constructor(public cartService: CartService) {}

  foods = [

{ restaurant:"SS Hyderabad Biryani", food:"Chicken Biryani", price:220, type:"nonveg", image:"assets/images/chickenbriyani.jpg",added:false },
{ restaurant:"SS Hyderabad Biryani", food:"Mutton Biryani", price:260, type:"nonveg", image:"assets/images/mutton biryani.jpg",added:false },

{ restaurant:"Dindigul Thalappakatti", food:"Chicken Biryani", price:240, type:"nonveg", image:"assets/images/chickenbriyani.jpg",added:false },
{ restaurant:"Dindigul Thalappakatti", food:"Veg Biryani", price:200, type:"veg", image:"assets/images/veg biryani.jpg",added:false },

{ restaurant:"Yaa Mohaideen Biryani", food:"Chicken Biryani", price:230, type:"nonveg", image:"assets/images/chickenbriyani.jpg",added:false },

{ restaurant:"Dominos", food:"Veg Pizza", price:220, type:"veg", image:"assets/images/veg pizza.jpg",added:false },
{ restaurant:"Dominos", food:"Cheese Pizza", price:250, type:"veg", image:"assets/images/cheese pizza.jpg",added:false },

{ restaurant:"Pizza Hut", food:"Veg Pizza", price:230, type:"veg", image:"assets/images/veg pizza.jpg",added:false },
{ restaurant:"Pizza Hut", food:"Chicken Pizza", price:290, type:"nonveg", image:"assets/images/Chicken Pizza.jpg",added:false },

{ restaurant:"Burger King", food:"Veg Burger", price:120, type:"veg", image:"assets/images/veg burger.jpg",added:false },
{ restaurant:"Burger King", food:"Chicken Burger", price:160, type:"nonveg", image:"assets/images/Chicken Burger.jpg",added:false },

{ restaurant:"KFC", food:"Fried Chicken", price:210, type:"nonveg", image:"assets/images/Fried Chicken.jpg",added:false },
{ restaurant:"KFC", food:"Chicken Burger", price:170, type:"nonveg", image:"assets/images/burger.jpg",added:false },

{ restaurant:"Subway", food:"Veg Sandwich", price:150, type:"veg", image:"assets/images/Veg Sandwich.jpg",added:false },
{ restaurant:"Subway", food:"Chicken Sandwich", price:180, type:"nonveg", image:"assets/images/Chicken Sandwich.jpg",added:false },

{ restaurant:"Murugan Idli Shop", food:"Idli", price:40, type:"veg", image:"assets/images/Idli.jpg",added:false },
{ restaurant:"Murugan Idli Shop", food:"Ghee Podi Idli", price:60, type:"veg", image:"assets/images/Ghee Podi Idli.jpg",added:false },

{ restaurant:"Saravana Bhavan", food:"Masala Dosa", price:90, type:"veg", image:"assets/images/Masala Dosa.jpg",added:false },
{ restaurant:"Saravana Bhavan", food:"Plain Dosa", price:70, type:"veg", image:"assets/images/Plain Dosa.jpg",added:false },

{ restaurant:"Cream Stone", food:"Chocolate Ice Cream", price:160, type:"veg", image:"assets/images/Chocolate Ice Cream.jpg",added:false },
{ restaurant:"Cream Stone", food:"Vanilla Ice Cream", price:140, type:"veg", image:"assets/images/Vanilla Ice Cream.jpg" ,added:false},

{ restaurant:"Ibaco", food:"Strawberry Ice Cream", price:180, type:"veg", image:"assets/images/Strawberry Ice Cream.jpg",added:false },

{ restaurant:"Punjabi Dhaba", food:"Chole Bhature", price:150, type:"veg", image:"assets/images/Chole Bhature.jpg",added:false },

{ restaurant:"Bombay Brasserie", food:"Pav Bhaji", price:170, type:"veg", image:"assets/images/Pav Bhaji.jpg" ,added:false},

{ restaurant:"Chat Street", food:"Pani Puri", price:70, type:"veg", image:"assets/images/panipuri.jpg" ,added:false}

];
searchText = '';
filteredFoods() {
  return this.foods.filter(item =>
    item.food.toLowerCase().includes(this.searchText.toLowerCase()) ||
    item.restaurant.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

 addToCart(food:any){
    this.cartService.addItem(food);
    food.added = true;
  }
}
