import { Component, inject, OnInit } from '@angular/core';
import { EcomerceService } from 'src/app/service/ecomerce.service';

import { IProducts } from 'src/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  MensJeans: IProducts[] = [];
  LehangaCholi: IProducts[] = [];
  WomenGouns: IProducts[] = [];
  MensKurta: IProducts[] = [];
  Shoes: IProducts[] = [];
  Saree:IProducts[] = []

  _ApiEcomerce = inject(EcomerceService)

  ngOnInit(): void {
    this.GetMensJeansSection();
    this.GetLehangaCholiSection()
    this.GetMensKurtaSection()
    this.GetShoesSection()
    this.GetWomenGounsSection()
    this.GetSareeSection()
  }

  GetMensJeansSection() {
    this._ApiEcomerce.getMenJeansData().subscribe((res: IProducts[]) => {
      this.MensJeans = res.slice(0, 5);
    })
  }

  GetShoesSection() {
    this._ApiEcomerce.getShoesData().subscribe((res: IProducts[]) => {
      this.Shoes = res.slice(0, 5)
    })
  }

  GetLehangaCholiSection() {
    this._ApiEcomerce.getLehangaCholiData().subscribe((res: IProducts[]) => {
      this.LehangaCholi = res.slice(0, 5)
    })
  }

  GetWomenGounsSection() {
    this._ApiEcomerce.getWomenGounsData().subscribe((res: IProducts[]) => {
      this.WomenGouns = res.slice(0, 5)
    })
  }

  GetMensKurtaSection() {
    this._ApiEcomerce.getMensKurtaData().subscribe((res: IProducts[]) => {
      this.MensKurta = res.slice(0, 5)

    })
  }

  GetSareeSection() {
    this._ApiEcomerce.getSareeData().subscribe((res: IProducts[]) => {
      this.Saree = res.slice(0, 5)

    })
  }

}
