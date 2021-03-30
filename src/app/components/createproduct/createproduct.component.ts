import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import { Router} from '@angular/router';
import {ShoppingcartService} from '../../services/shoppingcart.service';
import {UserService} from '../../services/user.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {NodeJSService} from '../../services/nodejs.service';


@Component({
  selector: 'app-login',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css'],

})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private _product: ProductService, private _cart: ShoppingcartService,
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
}, error =>{
  localStorage.clear();
  this._router.navigate([`login`]);
} )
  }


  createProduct() {

    if (this.productForm.valid) {
      this._nodejs.createProduct(this.productForm.value)
        .subscribe(
          data => {
            alert("Product with product name : " + this.productForm.value.name + " made successfuly!");
            this.productForm.reset();
            console.log(data);
          },
          error => {
            console.log(error);
          }
        );
    }


  }
}
