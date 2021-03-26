import {Injectable} from '@angular/core';
import {ShoppingcartService} from './shoppingcart.service';
import {ProductService} from './product.service';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class SearchService {

  search: boolean = false;
  searchValue : string = "";


  constructor(private _cart:ShoppingcartService,
              private _product:ProductService,
              private router:Router,
              private _user:UserService) {
  }

  searchFunction(event:any){
    this._product.searchProductsByKeyword(event.target.value);
    this.router.navigate(["/search/" + event.target.value]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}
