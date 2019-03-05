import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard'
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { DrinksComponent } from './core/components/drinks/drinks.component'
import { CartComponent } from './core/components/cart/cart.component'
const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'resource/drinks',
    component: DrinksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'resource/my-cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: '**',
  //   redirectTo: 'login'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
