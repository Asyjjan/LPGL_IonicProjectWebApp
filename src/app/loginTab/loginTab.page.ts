import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { connect } from '../../services/authServices'

import { ToastController } from '@ionic/angular';
import { AuthGuardService } from '../services/auth-guard.service';
import { Utilisateur } from '../services/user';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-loginTab-page',
  templateUrl: 'loginTab.page.html',
  styleUrls: ['loginTab.page.scss']
})
export class LoginTabPage implements OnInit  {

  registerForm;

  constructor(private formBuilder: FormBuilder, public toastController: ToastController, private router: Router, public authGuardService: AuthGuardService, public userDataService : UserDataService) {
    this.registerForm = this.formBuilder.group({
      pseudo: ["", [Validators.required]],
      mdp: ["", [Validators.required]],
    });
  }

  submit() {
    const { pseudo, mdp } = this.registerForm.value;
    const user = connect({pseudo, mdp})
    if (user) {
      this.success();
      this.userDataService.setUser(new Utilisateur(user))
      this.router.navigate(['/'])
    }
    else this.failed();
  }

  async failed() {
    const toast = await this.toastController.create({
      message: 'Connexion échoué',
      duration: 3000
    });
    toast.present();
  }
  async success() {
    const toast = await this.toastController.create({
      message: 'Connecté',
      duration: 3000,
      position:"top"
    });
    toast.present();
  }

  ionViewWillEnter(){
    if(this.authGuardService.getAuthenticated())
      this.router.navigate(['/']);
  }
  ngOnInit() {
  }


}
