import {Component, OnInit} from '@angular/core';
import {CookieService} from './services/cookie.service';
import {RouterOutlet} from '@angular/router';
import {UserService} from './services/user.service';
import {ProductService} from './services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Boot shop';

  constructor(public _cookie: CookieService, public _user:UserService, public _products:ProductService){
    this._products.loadProducts();
    this._user.checkLogin();

    setTimeout(x =>{
      this._cookie.readCookies();
    }, 250);

  }


  ngOnInit(): void {
  }


}
