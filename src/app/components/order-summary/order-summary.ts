import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-order-summary',
  imports: [CommonModule,RouterModule],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary {
   constructor(public cartService:CartService){}
}
