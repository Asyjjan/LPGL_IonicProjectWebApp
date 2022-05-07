import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { AuthGuardService } from '../services/auth-guard.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public userDataService : UserDataService , public authGuardService : AuthGuardService) {
    console.log(userDataService)
  }
  isLogin(){
    return this.authGuardService.getAuthenticated();
  }
}
