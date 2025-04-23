import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICaroselData, ICategories, ILogo, IProducts } from 'src/interface';

@Injectable({
  providedIn: 'root'
})
export class EcomerceService {

  public Api_Base_path: string = 'http://localhost:3000/';

  constructor(private _http: HttpClient) { }

  getCarouselData(): Observable<ICaroselData[]> {
    return this._http.get<ICaroselData[]>(`${this.Api_Base_path}carouselData`)
  }

  getMenJeansData(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>(`${this.Api_Base_path}men_jeans`);
  }
  getLehangaCholiData(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>(`${this.Api_Base_path}lehenga_choli`)
  }
  getWomenGounsData(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>(`${this.Api_Base_path}gounsPage1`)
  }
  getMensKurtaData(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>(`${this.Api_Base_path}men_kurta`)
  }
  getMensPantsData(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>(`${this.Api_Base_path}mensPantsPage1`)
  }
  getShoesData(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>(`${this.Api_Base_path}mensShoesPage1`)
  }
  getSareeData(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>(`${this.Api_Base_path}SareePage1`)
  }
  getLOgoData(): Observable<ILogo> {
    return this._http.get<ILogo>(`${this.Api_Base_path}logoImage`)
  }
  getCategoriesData() {
    return this._http.get(`${this.Api_Base_path}categories`)
  }

}
