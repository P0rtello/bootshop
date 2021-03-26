import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {
  HttpClient, HttpErrorResponse,
  HttpHeaders, HttpParams
} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {User} from '../models/user';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class NodeJSService {

  constructor(private _http: HttpClient) {
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

  getUserName() {
    return this._http.get('http://localhost:3000/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  createProduct(body:any){
    return this._http.post('http://localhost:3000/products/create', body,{
      observe:'body'
    });
  }

  loadProducts(): Observable<Product[]>{
    return this._http.get('http://localhost:3000/products/load').pipe(map(res => <Product[]>res));
  }


}
