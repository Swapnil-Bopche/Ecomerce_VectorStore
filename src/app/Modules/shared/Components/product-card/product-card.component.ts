import { Component, Input } from '@angular/core';
import { IProducts } from 'src/interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() Pants: IProducts | undefined;
}
