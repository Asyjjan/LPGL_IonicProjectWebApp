import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register-page/register-page.module').then( m => m.RegisterPagePageModule)
  },
  {
    path: 'detail-animal',
    loadChildren: () => import('./detail-animal/detail-animal.module').then( m => m.DetailAnimalPageModule)
  },  {
    path: 'edit-profil',
    loadChildren: () => import('./edit-profil/edit-profil.module').then( m => m.EditProfilPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
