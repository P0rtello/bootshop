import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CreateProductComponent} from './components/createproduct/createproduct.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'create',canActivate: [AuthGuard], component: CreateProductComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule {
  public constructor(private router: Router){}
}
