import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:any[] = [];

  addItem(item:any){

    const existing = this.cart.find(
      i => i.food === item.food && i.restaurant === item.restaurant
    );

    if(existing){
      existing.quantity += 1;
    } else {
      this.cart.push({...item, quantity:1});
    }

  }

  getItems(){
    return this.cart;
  }

  increase(item:any){
    item.quantity += 1;
  }

  decrease(item:any){

  if(item.quantity > 1){
    item.quantity -= 1;
  } 
  else {
    this.removeItem(item);
  }

}

 removeItem(item:any){

  const index = this.cart.findIndex(
    i => i.food === item.food && i.restaurant === item.restaurant
  );

  if(index !== -1){
    this.cart.splice(index,1);
  }

}

  getTotal(){
    return this.cart.reduce(
      (total,item)=> total + item.price * item.quantity ,0
    );
  
  }

  clearCart(){
  this.cart = [];
}

}