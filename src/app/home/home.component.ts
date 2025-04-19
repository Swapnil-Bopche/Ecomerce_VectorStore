import { Component, inject, OnInit } from '@angular/core';
import { EcomerceService } from '../service/ecomerce.service';
import { IProducts } from 'src/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  MensJeans: IProducts[] = [];
  ApiEcomerce = inject(EcomerceService)

  ngOnInit(): void {
    this.GetMensJeansSection()
  }

  GetMensJeansSection() {
    this.ApiEcomerce.getMenJeansData().subscribe((res: IProducts[]) => {
      console.log(res);
      
      this.MensJeans = res.slice(0, 5);
    })
  }

}
