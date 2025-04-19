import { Component, Input } from '@angular/core';
import { IProducts } from 'src/interface';

@Component({
  selector: 'app-home-product-cart',
  templateUrl: './home-product-cart.component.html',
  styleUrls: ['./home-product-cart.component.css']
})
export class HomeProductCartComponent {


  @Input() product!: IProducts;
}
