import { Component, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit{

  searchValue : string = "";
  username : string = ""
  loggedIn : boolean = false;


  constructor(public shoppingcartService:ShoppingcartService,
              public productService:ProductService,
              public router:Router,
              public userService:UserService,
              public searchService:SearchService){

  }

  ngOnInit() {
    this.loggedIn = this.userService.loggedIn();
    this.userService.checkLogin();
    this.username = localStorage.getItem('username')
  }

  gegevens(){
    if(this.userService.isAdmin()){
      this.router.navigate(["/create"])
    }else{
      console.log("loads amezing gegevens pagina");
    }

  }

  logout(){
    this.userService.logout();
  }
}
