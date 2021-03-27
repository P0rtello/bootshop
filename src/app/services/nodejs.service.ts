import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { map} from 'rxjs/operators';

import {Product} from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class NodeJSService {

  constructor(private _http: HttpClient) {
  }

   submitOrder(body:any){
    console.log("bjhhrnaijfh");
    return this._http.post('http://localhost:3000/order/create', body,{
      observe:'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  submitRegistration(body:any){
    return this._http.post('http://localhost:3000/users/register', body,{
      observe:'body'
    });
  }

  login(body:any){
    return this._http.post('http://localhost:3000/users/login', body,{
      observe:'body'
    });
  }

  verifyToken() {
    return this._http.get('http://localhost:3000/users/verify', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  createProduct(body:any){
    return this._http.post('http://localhost:3000/products/create', body,{
      observe:'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  loadProducts(): Observable<Product[]>{
    return this._http.get('http://localhost:3000/products/load').pipe(map(res => <Product[]>res));
  }



}
