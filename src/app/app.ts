import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CartService } from './services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  currentRoute = '';

  constructor(
    public cartService: CartService,
    private router: Router
  ){
    this.router.events.subscribe(()=>{
      this.currentRoute = this.router.url;
    });
  }

}