import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment {

  paymentMethod = '';

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  
 placeOrder(){

  if(!this.paymentMethod){
    alert("Select payment method");
    return;
  }

  if(this.paymentMethod === 'upi' && !this.upiVerified){
    alert("Please verify UPI ID");
    return;
  }

  const orders = JSON.parse(localStorage.getItem('orders') || '[]');

  orders.push({
    items: this.cartService.getItems(),
    total: this.cartService.getTotal(),
    date: new Date(),
    payment: this.paymentMethod
  });

  localStorage.setItem('orders', JSON.stringify(orders));

  this.cartService.clearCart();

  this.router.navigate(['/order-success']);

}
upiId = '';
upiVerified = false;

verifyUPI(){

  const upiRegex =  /^[\w.-]+@[\w]+$/;

  if(upiRegex.test(this.upiId)){
    this.upiVerified = true;
  }
  else{
    alert("Invalid UPI ID");
  }

}

}