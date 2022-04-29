import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  private authenticated= false;
  getAuthenticated(){
    return this.authenticated;
  }
  setAuthenticated(bool){
    this.authenticated=bool;
  }
  constructor(private router:Router) { }
  canActivate(route : ActivatedRouteSnapshot) : boolean{
    if(!this.getAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
