import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modules/featured/Components/home/home.component';
import { ProductsComponent } from './Modules/featured/Components/products/products.component';
import { CartComponent } from './Modules/featured/Components/cart/cart.component';
import { ProductDetailsComponent } from './Modules/featured/Components/product-details/product-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CheckoutComponent } from './Modules/featured/Components/checkout/checkout.component';
import { PaymentComponent } from './Modules/featured/Components/payment/payment.component';
import { OrderComponent } from './Modules/featured/Components/order/order.component';
import { OrderDetailsComponent } from './Modules/featured/Components/order-details/order-details.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/payment/:id', component: PaymentComponent },
  { path: 'account/orders', component: OrderComponent },
  { path: 'order/:id', component: OrderDetailsComponent },
  { path: ':topLavelCategory/:secondLavelCategory/:thirdLavelCategory', component: ProductsComponent },
  { path: '**', component: PagenotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
