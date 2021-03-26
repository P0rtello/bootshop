import {Injectable, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ActivatedRoute} from '@angular/router';
import {NodeJSService} from './nodejs.service';

@Injectable()
export class ProductService{

  products : Product[];
  selectedProducts : Product[] = [];

  constructor(private _nodejs:NodeJSService){

  }

  loadProducts(){
    this._nodejs.loadProducts().subscribe(res => {
      this.products = res

    });
  }

  selectCategory(cat:string){
    this.selectedProducts.splice(0, 1000);
    for(let product of this.products){
      if (product.cat === cat){
        this.selectedProducts.push(product)
      }
    }
  }

  getProductById(id:number): Product{
    for(let prod of this.products){
      if (prod.id === id){
        return prod
      }
    }
  }

  searchProductsByKeyword(value:string){
    this.selectedProducts.splice(0, 1000);
    for(let prod of this.products){
      if (prod.name.toLowerCase().includes(value.toLowerCase())){
        this.selectedProducts.push(prod)
      }
    }
  }
}

