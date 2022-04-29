import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public userDataService : UserDataService) {
    console.log(userDataService)
  }

}
