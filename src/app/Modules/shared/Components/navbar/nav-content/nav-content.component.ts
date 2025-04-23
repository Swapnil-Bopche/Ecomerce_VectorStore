import { Component, inject, Input, OnInit } from '@angular/core';
import { navigation } from 'src/app/navigation';
import { EcomerceService } from 'src/app/service/ecomerce.service';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.css']
})
export class NavContentComponent implements OnInit {

  Category: any;
  @Input() selectedSection: any
  _ApiEcoomerce = inject(EcomerceService)

  ngOnInit(): void {
    this.Category = navigation;
    // console.log('Category data', this.Category);

  }

  // GetCategeroies() {
  //   this._ApiEcoomerce.getCategoriesData().subscribe(res => {
  //     console.log('Category daat pleae', res);
  //     this.Category = res
  //   })
  // }

}
