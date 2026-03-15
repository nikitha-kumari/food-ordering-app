import { Routes } from '@angular/router';

import { Splash } from './components/splash/splash';
import { Login} from './components/login/login';
import { Signup } from './components/signup/signup';
import { Home } from './components/home/home';
import { Cart} from './components/cart/cart';
import { OrderSummary } from './components/order-summary/order-summary';
import { Address } from './components/address/address';
import { Payment } from './components/payment/payment';
import { OrderSuccess } from './components/order-success/order-success';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
  { path: '', component: Splash },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup},
  { path: 'home', component: Home },
  {path:'cart',component:Cart},
  {path:'order-summary',component:OrderSummary},
  {path:'address',component:Address},
  {path:'payment',component:Payment},
  {path:'order-success',component:OrderSuccess},
  {path:'profile',component:Profile},
  

];