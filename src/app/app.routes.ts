import { Routes } from '@angular/router';

import { Splash } from './components/splash/splash';
import { Login} from './components/login/login';
import { Signup } from './components/signup/signup';

export const routes: Routes = [
  { path: '', component: Splash },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup}
];