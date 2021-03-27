import {Injectable, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ActivatedRoute} from '@angular/router';
import {ShoppingcartEntry} from '../models/shoppingcartentry';
import {CookieService} from './cookie.service';

@Injectable()
export class ShoppingcartService{


  private _cart : ShoppingcartEntry[] = [];

  constructor(){
  }

  addToCart(product: Product){
    if(this.checkIfProductAlreadyInCart(product.id)){
      this.incrementAmountOfEntry(product.id)
    } else {
      this._cart.push(new ShoppingcartEntry(product, 1));
    }
  }

  changeAmountOfEntry(id:number, amount:number){
    for(let entry of this._cart){
      if (id === entry.product.id){
        entry.amount = amount
      }
    }
  }

  incrementAmountOfEntry(id:number){
    for(let entry of this._cart){
      if (id === entry.product.id){
        entry.amount += 1
      }
    }
  }

  checkIfProductAlreadyInCart(id:number): boolean{
    let isAlreadyInCart : boolean = false;
    for(let entry of this._cart){
      if (id === entry.product.id){
        isAlreadyInCart = true;
      }
    }
    return isAlreadyInCart;
  }

  getAmountOfProductsInCart(){
    let amount = 0;
    for(let product of this._cart){
      amount += product.amount
    }
    return amount
  }

  getTotalValueOfProductsInCart(){
    let value = 0;
    for(let product of this._cart){
      value += product.amount * product.product.price;
      console.log(this._cart);
    }
    return value ;
  }

  get cart(): ShoppingcartEntry[] {
    return this._cart;
  }

}





