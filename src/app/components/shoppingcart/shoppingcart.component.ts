import {Component, OnInit} from '@angular/core';
import {ShoppingcartService} from '../../services/shoppingcart.service';
import {NodeJSService} from '../../services/nodejs.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],

})


export class ShoppingcartComponent implements OnInit{

  sleepkosten: number

  constructor( public shoppingcartService:ShoppingcartService,private _nodejs:NodeJSService, private _router: Router ){
  this.sleepkosten= 199.95;
  }

  ngOnInit() {

  }

  submit_order(){
    this._nodejs.submitOrder(this.shoppingcartService.cart).subscribe(response =>{
      let orderId = response["orderId"];
      console.log(orderId);
      alert("Order wirth orderId: " + orderId + " successful");
      this.shoppingcartService.clearCart();

      this._router.navigate([`/home`])

    });
  }



}
