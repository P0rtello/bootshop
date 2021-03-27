import {Component} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CategoryService} from '../../services/category.service';
import {SearchService} from '../../services/search.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  mySubscription:Subscription;




  constructor(public productService: ProductService,
              public categoryService:CategoryService,
              public route: ActivatedRoute,
              public router: Router,
              public searchService: SearchService){

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.mySubscription = this.router.events.subscribe((event) => {

      categoryService.value = this.route.snapshot.paramMap.get("value");
      categoryService.cat = this.route.snapshot.paramMap.get("cat");

      if (event instanceof NavigationEnd) {
        setTimeout(()=>{
          this.categoryService.loadCategory();
        }, 50);
        this.router.navigated = false;
      }
    });

  }


}
