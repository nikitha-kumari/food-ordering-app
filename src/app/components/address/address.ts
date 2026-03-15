import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './address.html',
  styleUrl: './address.css',
})
export class Address {

  address = {
    street:'',
    city:'',
    pincode:''
  };

  constructor(
    private userService:UserService,
    private router:Router
  ){}

  saveAddress(){

    // store in service
    this.userService.setAddress(this.address);

    // store in localStorage (so profile page can read it)
    localStorage.setItem('address', JSON.stringify(this.address));

    this.router.navigate(['/payment']);

  }

}