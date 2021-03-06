import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import { Router} from '@angular/router';
import {ShoppingcartService} from '../../services/shoppingcart.service';

import {UserService} from '../../services/user.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {NodeJSService} from '../../services/nodejs.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit{

  registerForm: FormGroup;
  loginForm: FormGroup;
  successMessage: String = '';

  constructor(private _product: ProductService,
              private _cart:ShoppingcartService,
              private _user:UserService,
              private _nodejs:NodeJSService,
              private _router:Router){

  this.registerForm = new FormGroup({
    email: new FormControl(null, Validators.email),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    confirmpassword: new FormControl(null, this.passValidator)
  });
    this.registerForm.controls.password.valueChanges.subscribe(x => this.registerForm.controls.cnfpass.updateValueAndValidity());


    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required)
    });

  }


  ngOnInit() {
  }

  isValid(controlName) {
    return this.registerForm.get(controlName).invalid && this.registerForm.get(controlName).touched;
  }

  isValidLogin(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || true)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

  register() {
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      this._nodejs.submitRegistration(this.registerForm.value)
        .subscribe(
          data =>{ this.successMessage = 'Registration Success';
            this._user.isLoggedIn = true;
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/home']);},
          error => this.successMessage = 'Some error'
        );
    }
  }

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this._nodejs.login(this.loginForm.value)
        .subscribe(
          data => {
            this._user.isLoggedIn = true;
            console.log(data);
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/home']);
          },
          error => { }
        );
    }
  }


}
