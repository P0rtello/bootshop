import {Component, OnInit} from '@angular/core';
import {ShoppingcartService} from '../../services/shoppingcart.service';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],

})


export class ShoppingcartComponent implements OnInit{

  sleepkosten: number

  constructor( public shoppingcartService:ShoppingcartService){
  this.sleepkosten= 199.95;
  }

  ngOnInit() {

  }



}
