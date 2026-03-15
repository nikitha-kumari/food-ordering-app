import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(private userService:UserService,
            private router:Router){}
            user = {
  name: '',
  email: '',
  password: '',
  phone:''
};
  signup(){

  if(!this.user.name || !this.user.email || !this.user.password){
    alert("Please fill all fields");
    return;
  }
 
  
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailPattern.test(this.user.email)){
    alert("Enter a valid email");
    return;
  }

  if(this.user.password.length < 6){
    alert("Password must be at least 6 characters");
    return;
  }
  if(this.user.phone.length>10)
  {
    alert("Phone number must have 10 digits");
    return;
  }
   else{
    alert("Account is created!!!");
  }
  localStorage.setItem('user', JSON.stringify(this.user));

  //this.router.navigate(['/home']);

}

}
