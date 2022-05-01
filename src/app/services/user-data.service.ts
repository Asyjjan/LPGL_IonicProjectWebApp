import { Injectable } from '@angular/core';
import { Utilisateur } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  getUser(){
    return JSON.parse(localStorage.getItem("user"));
  }
  setUser(user:Utilisateur){
    localStorage.setItem("user",JSON.stringify(user));
  }

  logout(){
    localStorage.removeItem("user")
  }
  constructor() { }

}
