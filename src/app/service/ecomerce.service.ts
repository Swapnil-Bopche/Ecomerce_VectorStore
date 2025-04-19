import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICaroselData, IProducts } from 'src/interface';

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

}
