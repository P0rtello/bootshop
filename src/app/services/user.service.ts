import {Injectable} from '@angular/core';
import {NodeJSService} from './nodejs.service';
import {Router} from '@angular/router';

@Injectable()
export class UserService{

  isLoggedIn : boolean = false;
  username: string = "";

  constructor(private _nodejs:NodeJSService, private _router:Router){
  }

  logout(){
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  checkLogin(){
      this._nodejs.getUserName().subscribe( data => {
          this.username = data.toString();
          this.isLoggedIn = true;
        },
        error => {
          this.isLoggedIn = false;
        }
      )
  }

}





