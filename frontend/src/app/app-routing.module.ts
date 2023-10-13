import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FashionPageComponent } from './components/pages/fashion-page/fashion-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},//default
  {path:'header',component:HeaderComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'fashion/:id',component:FashionPageComponent},
  {path:'login',component:LoginPageComponent},
  { path: 'cart-page', component: CartPageComponent },
  {path:'register',component:RegisterPageComponent},
  {path:'checkout',component:CheckoutPageComponent,canActivate:[AuthGuard]},
  {path:'payment',component:PaymentPageComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
