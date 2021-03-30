import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CategoryService} from '../../services/category.service';
import {Product} from '../../models/product';
import {ShoppingcartService} from '../../services/shoppingcart.service';
import {CookieService} from '../../services/cookie.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],

})
export class ProductPageComponent {

  mySubscription:Subscription;
  product : Product = <Product>{};
  myDate = new Date();
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private shoppingcartService:ShoppingcartService,
              private cookieService: CookieService){
    this.myDate.setDate(this.myDate.getDate() + 3);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };


    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(()=>{
          this.loadProduct();
        }, 50);
        this.router.navigated = false;
      }
    });

  }


  loadProduct(){
    let id = this.route.snapshot.paramMap.get("id");
    this.product = this.productService.getProductById(Number(id));
  }

  addToCart(){
    let id = this.route.snapshot.paramMap.get("id");
    this.shoppingcartService.addToCart(this.productService.getProductById(Number(id)));


    // setTimeout(()=>{
    //   this.cookieService.createCookies();
    // },300)
  }
  removeFromCart(){
    let id = this.route.snapshot.paramMap.get("id");
    this.shoppingcartService;
  }

}
