import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [RouterModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router){}

  loginData = {
  email: '',
  password: ''
};

login(){
  if(!this.loginData.email || !this.loginData.password){
    alert("Please enter email and password");
    return;
  }
  this.router.navigate(['/home']);
}
}