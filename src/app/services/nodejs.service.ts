import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { map} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {Product} from '../models/product';


@Injectable({
  providedIn: 'root',
})
export class NodeJSService {
  private url = environment.api_url;

  constructor(private _http: HttpClient) {

  }

   submitOrder(body:any){
    console.log("bjhhrnaijfh");
    return this._http.post(this.url+ '/order/create', body,{
      observe:'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  submitRegistration(body:any){
    return this._http.post(this.url+ '/users/register', body,{
      observe:'body'
    });
  }

  login(body:any){
    return this._http.post(this.url+ '/users/login', body,{
      observe:'body'
    });
  }

  verifyToken() {
    return this._http.get(this.url+ '/users/verify', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  createProduct(body:any){
    return this._http.post(this.url+ '/products/create', body,{
      observe:'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  loadProducts(): Observable<Product[]>{
    return this._http.get(this.url+ '/products/load').pipe(map(res => <Product[]>res));
  }



}
