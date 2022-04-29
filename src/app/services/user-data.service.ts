import { Injectable } from '@angular/core';
import { Utilisateur } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private user:Utilisateur;
  getUser(){
    return this.user;
  }
  setUser(user:Utilisateur){
    this.user=user;
  }
  constructor() { }

}
