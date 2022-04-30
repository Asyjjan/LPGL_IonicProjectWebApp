import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginTabPage } from './loginTab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LoginTabPageRoutingModule } from './loginTab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LoginTabPageRoutingModule
  ],
  declarations: [LoginTabPage]
})
export class LoginTabPageModule {}
