import { Component, inject, OnInit } from '@angular/core';
import { filters, singleFilter } from './filterdata';
import { IFilter, IProducts } from 'src/interface';
import { EcomerceService } from 'src/app/service/ecomerce.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  fliterData: IFilter[] = []
  singleFilterData: IFilter[] = []
  menPants: IProducts[] = []
  _apiEcommerce = inject(EcomerceService)

  constructor(private _router: Router, private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.fliterData = filters;
    this.singleFilterData = singleFilter;
    this.GetMenpantsDetails()

  }

  HandleMultipleSelectFilter(_value: string, sectionId: string) {
    const _queryParams = { ...this._activateRoute.snapshot.queryParams }
    console.log(_queryParams);
    const filtervalues = _queryParams[sectionId] ? _queryParams[sectionId].split(',') : [];
    const valueIndex = filtervalues.indexOf(_value);

    if (valueIndex != -1) {
      filtervalues.splice(valueIndex, 1);
    } else {
      filtervalues.push(_value)
    }

    if (filtervalues.length > 0) {
      _queryParams[sectionId] = filtervalues.join(",")
    } else {
      delete _queryParams[sectionId]
    }

    this._router.navigate([], _queryParams)

  }

  HandleSingleSelectFilter(_value: string, sectionId: string) {
    const _queryParams = { ...this._activateRoute.snapshot.queryParams }
    console.log(_queryParams);
   const h =  _queryParams[sectionId] = _value;
    console.log('vaue h be', h);
    
    const jhk = this._router.navigate([], _queryParams)
    console.log('kch to bolo', jhk);
    
  }

  GetMenpantsDetails() {
    this._apiEcommerce.getMensPantsData().subscribe((res: IProducts[]) => {
      this.menPants = res.slice(0, 17)
      // console.log(this.menPants);

    })
  }




}
