import {Injectable} from '@angular/core';
import {ShoppingcartService} from './shoppingcart.service';
import {ProductService} from './product.service';
import {ShoppingcartEntry} from '../models/shoppingcartentry';

@Injectable()
export class CookieService{


  constructor(private _cart:ShoppingcartService, private _product:ProductService){
  }

  createCookies(){
    let counter = 0;
    for(let entry of this._cart.cart){
      document.cookie = "id" + counter + "=" + entry.product.id;
      document.cookie = "amount" + counter + "=" + entry.amount;
      counter++;
    }
  }

  readCookies(){
    for(let i = 0; i < 25; i ++)
      if(this.getCookie("id" + i) != ""){
        this._cart.cart.push(new ShoppingcartEntry(
          this._product.getProductById(Number(this.getCookie("id" + i))),
          Number(this.getCookie("amount" + i))));
      } else {
        break;
      }


  }

  getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }




}





