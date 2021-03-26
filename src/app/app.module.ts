import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProductService} from './services/product.service';
import {FooterComponent} from './components/footer/footer.component';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {ProductsComponent} from './components/products/products.component';
import {CategoryService} from './services/category.service';
import {ProductPageComponent} from './components/productpage/productpage.component';
import {ShoppingcartComponent} from './components/shoppingcart/shoppingcart.component';
import {ShoppingcartService} from './services/shoppingcart.service';
import {CookieService} from './services/cookie.service';
import {LoginComponent} from './components/login/login.component';
import {UserService} from './services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NodeJSService} from './services/nodejs.service';
import {CreateProductComponent} from './components/createproduct/createproduct.component';
import {SearchService} from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductPageComponent,
    ShoppingcartComponent,
    LoginComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'create', component: CreateProductComponent},
      {path: 'category/:cat', component: ProductsComponent, data: {animation: 'CatPage'}},
      {path: 'search/:value', component: ProductsComponent, data: {animation: 'CatPage'}},
      {path: 'item/:id', component: ProductPageComponent, data: {animation: 'ItemPage'}},
      {path: 'cart', component: ShoppingcartComponent},
      {path: 'login', component: LoginComponent},

    ]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [ProductService, CategoryService, ShoppingcartService, CookieService, UserService, NodeJSService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
