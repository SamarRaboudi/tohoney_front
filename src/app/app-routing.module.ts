import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent  },
  { path: 'header', component:HeaderComponent},
  { path: 'footer', component:FooterComponent },
  { path: 'home', component:HomeComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'aboutUs', component:AboutUsComponent },
  { path: 'shop', component:ShopComponent },
  { path: 'cart', component:CartComponent },
  { path: 'wish', component:WishlistComponent },
  { path: 'prodDetail', component:ProdDetailComponent },
  { path: 'check', component:CheckoutComponent },
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
