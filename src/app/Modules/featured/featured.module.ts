import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from './Components/featured.component';
import { HomeComponent } from './Components/home/home.component';
import { HomeProductCartComponent } from './Components/home/home-product-cart/home-product-cart.component';
import { ProductSliderComponent } from './Components/home/product-slider/product-slider.component';
import { MainCarouselComponent } from './Components/home/main-carousel/main-carousel.component';
import { ProductsComponent } from './Components/products/products.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { CartComponent } from './Components/cart/cart.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { OrderComponent } from './Components/order/order.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';





@NgModule({
  declarations: [
    FeaturedComponent,
    HomeComponent,
    HomeProductCartComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    OrderComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    SharedModule
],
  exports: [
    FeaturedComponent,
    HomeComponent,
    ProductsComponent,

  ]
})
export class FeaturedModule { }
