import {Injectable, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ShoppingcartEntry} from '../models/shoppingcartentry';

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

  removeFromCart(entry){
    const index: number = this._cart.indexOf(entry)
    if(index !== -1) {
      this._cart.splice(index, 1);
    }

  }

  clearCart(){
    this._cart = [];
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
    }
    return value ;
  }

  get cart(): ShoppingcartEntry[] {
    return this._cart;
  }

}





