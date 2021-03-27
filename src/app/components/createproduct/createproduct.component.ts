import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductService} from '../../services/product.service';
import { Router} from '@angular/router';
import {ShoppingcartService} from '../../services/shoppingcart.service';
import {HttpService} from '../../services/http.service';
import {UserService} from '../../services/user.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {NodeJSService} from '../../services/nodejs.service';


@Component({
  selector: 'app-login',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css'],

})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup;
  successMessage: String = '';

  constructor(private _product: ProductService, private _cart: ShoppingcartService, private _http: HttpService,
              private _user: UserService, private _nodejs: NodeJSService, private _router: Router) {
    this.productForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      img: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      lengte: new FormControl(null, Validators.required),
      desc: new FormControl(null),
      desc2: new FormControl(null),
      desc3: new FormControl(null)
    });

  }

  ngOnInit() {
this._nodejs.verifyToken().subscribe(data =>{
  console.log("valid");
}, error =>{
  localStorage.clear();
  this._router.navigate([`login`]);
} )
  }

  isValid(controlName) {
    return this.productForm.get(controlName).invalid && this.productForm.get(controlName).touched;
  }

  createProduct() {
    console.log(this.productForm.value);

    if (this.productForm.valid) {
      this._nodejs.createProduct(this.productForm.value)
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
          }
        );
    }


  }
}
