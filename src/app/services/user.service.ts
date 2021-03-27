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
    localStorage.clear();
    this.isLoggedIn = false;
    this._router.navigate(['/login']);
  }

  checkLogin(){
      this._nodejs.verifyToken().subscribe(data => {
          localStorage.setItem('username', this.getAttributeFromToken('username'))
          this.isLoggedIn = true;
        },
        error => {
          localStorage.clear()
          this.isLoggedIn = false;
        }
      )
  }

  loggedIn(){
    return !!this.getToken()
  }

  isAdmin(){
    return this.getAttributeFromToken("is_admin");
  }

  public getAttributeFromToken(tokenAttribute: string)  {
    if (this.getToken() !== null) {
      let splitToken = this.getToken().split('.')[1];
      let jwtData = JSON.parse(window.atob(splitToken));
      return jwtData[tokenAttribute]
    }
    return false;
  }

  getToken(){
    return localStorage.getItem(`token`)
  }

}





