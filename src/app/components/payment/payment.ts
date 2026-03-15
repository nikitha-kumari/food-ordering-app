import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment{

  constructor(private cartService: CartService,
              private router: Router) {}

  placeOrder(){

  const orders = JSON.parse(localStorage.getItem('orders') || '[]');

  orders.push({
    items: this.cartService.getItems(),
    total: this.cartService.getTotal(),
    date: new Date()
  });

  localStorage.setItem('orders', JSON.stringify(orders));

  this.cartService.clearCart();

  this.router.navigate(['/order-success']);

}

}