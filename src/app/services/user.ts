import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:any = {};
  address:any = {};

  setUser(data:any){
    this.user = data;
  }

  getUser(){
    return this.user;
  }

  setAddress(data:any){
    this.address = data;
  }

  getAddress(){
    return this.address;
  }

}