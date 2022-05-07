import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  getAuthenticated(){
    if(localStorage.getItem("user"))
      return true
  }
  constructor(private router:Router) { }
  canActivate(route : ActivatedRouteSnapshot) : boolean{
    if(!this.getAuthenticated()){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
