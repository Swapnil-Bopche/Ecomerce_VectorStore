import { Component, inject, OnInit } from '@angular/core';
import { EcomerceService } from './service/ecomerce.service';
import { ILogo } from 'src/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  LogoData: ILogo | undefined;

  _ApiEcomerce = inject(EcomerceService)

  ngOnInit(): void {

  }

  // GetLogoIMage() {
  //   this._ApiEcomerce.getLOgoData().subscribe((res: ILogo) => {
  //     console.log(res);
  //     this.LogoData = res
  //   })
  // }
}
