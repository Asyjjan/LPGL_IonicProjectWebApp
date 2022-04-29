import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { connect } from '../../services/authServices'
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { UserDataService } from '../services/user-data.service';
import { Utilisateur } from '../services/user';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

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
    console.log(user)
    if (user) {
      this.success();
      this.userDataService.setUser(new Utilisateur(user))
      this.authGuardService.setAuthenticated(true)
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
      duration: 3000
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
