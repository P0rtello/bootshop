import { Component } from '@angular/core';
import {ShoppingcartService} from '../../services/shoppingcart.service';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchValue : string = "";


  constructor(public shoppingcartService:ShoppingcartService,
              public productService:ProductService,
              public router:Router,
              public userService:UserService,
              public searchService:SearchService){

  }

  logout(){
    this.userService.logout();
  }
}
