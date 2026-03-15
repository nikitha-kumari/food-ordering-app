import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
selector: 'app-profile',
standalone: true,
imports: [CommonModule,RouterModule],
templateUrl: './profile.html',
styleUrl: './profile.css'
})
export class Profile {

section = 'info';

user:any = {};
address:any = {};
orders:any[] = [];

constructor(private router:Router){

const userData = localStorage.getItem('user');
const addressData = localStorage.getItem('address');
const orderData = localStorage.getItem('orders');

if(userData){
this.user = JSON.parse(userData);
}

if(addressData){
this.address = JSON.parse(addressData);
}

if(orderData){
this.orders = JSON.parse(orderData);
}

}

selectSection(name:string){
this.section = name;
}

logout(){
localStorage.removeItem('user');
this.router.navigate(['/login']);
}

}