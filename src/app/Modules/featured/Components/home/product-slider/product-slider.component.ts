import { Component, Input } from '@angular/core';
import { IProducts } from 'src/interface';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent {

  @Input() title: string | undefined;
  @Input() productList: IProducts[] = [];
}
