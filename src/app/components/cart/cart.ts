import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports:[CommonModule,RouterModule],
  templateUrl:'./cart.html',
  styleUrl:'./cart.css'
})
export class Cart{

  cartItems:any[] = [];

  constructor(public cartService:CartService){
    this.cartItems = this.cartService.getItems();
  }

}