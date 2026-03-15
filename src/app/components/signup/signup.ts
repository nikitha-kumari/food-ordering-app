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
  password: ''
};
  signup(){

  localStorage.setItem('user', JSON.stringify(this.user));

  //this.router.navigate(['/home']);

}
}
