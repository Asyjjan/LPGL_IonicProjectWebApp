import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {create , findAll} from '../../services/userServices'
import { ToastController } from '@ionic/angular';
import { Router} from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {
  
  registerForm;

  constructor(private formBuilder:FormBuilder,public toastController: ToastController, private router: Router, private authGuardService:AuthGuardService) {
    this.registerForm = this.formBuilder.group({
      pseudo : ["",[Validators.required]], 
      mdp: ["",[Validators.required]],
      email:["",[Validators.required, Validators.email]],
      telephone : ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((06)|(07))[0-9]{8}$")]],
      nom :["",[Validators.required]],
      prenom : ["",[Validators.required]],
    });
   }

  submit(){
    const user = {...this.registerForm.value}
    const response = create(user);
    this.success();
    this.router.navigate(["/tabs/login"]);
    
  }
  async success(){
    const toast = await this.toastController.create({
      message: 'Inscription réalisée avec succès',
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
