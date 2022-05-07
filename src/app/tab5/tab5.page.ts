import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../services/user';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  public user: Utilisateur;
  public itemEditing = { path: "" }
  constructor(public userDataService: UserDataService, public router: Router) {
    this.user = this.userDataService.getUser();
    console.log(this.user)
  }


  logout() {
    this.userDataService.logout();
    this.router.navigate(['/'])
  }

  onInfosClick(path) {
    this.itemEditing = { path: path }
    console.log(this.itemEditing)
  }

}
