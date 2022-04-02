import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {
  
  registerForm;
  constructor(private formBuilder:FormBuilder) {
    this.registerForm = this.formBuilder.group({
      pseudo : [""], 
      mdp: [""],
      email:["",[Validators.required, Validators.email]],
      telephone : ["" , [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((06)|(07))[0-9]{8}$")]],
      nom :[""],
      prenom : [""],
    });
   }

  submit(){
      console.log(this.registerForm.value)

  }
  ngOnInit() {
  }

}
