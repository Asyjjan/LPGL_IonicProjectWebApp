import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import {connect} from '../../services/authServices'
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router'; 
import { AuthGuardService } from '../services/auth-guard.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  registerForm;

  constructor(private formBuilder:FormBuilder, public toastController: ToastController, private router : Router , public authGuardService : AuthGuardService) {
    this.registerForm = this.formBuilder.group({
      pseudo : ["",[Validators.required]], 
      mdp: ["",[Validators.required]],
    });
   }

  submit(){
    const {pseudo,mdp} = this.registerForm.value;
    if(connect({pseudo,mdp})){this.success() , this.router.navigate(['/'])}
    else this.failed();
  }

  async failed(){
    const toast = await this.toastController.create({
      message: 'Connexion échoué',
      duration: 3000
    });
    toast.present();
  }
  async success(){
    const toast = await this.toastController.create({
      message: 'Connecté',
      duration: 3000
    });
    toast.present();
    this.authGuardService.setAuthenticated(true)
  }
  ngOnInit() {
  }

}
