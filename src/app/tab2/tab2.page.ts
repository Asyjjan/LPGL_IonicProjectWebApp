import { Component } from '@angular/core';
import {findAll, update} from '../../services/annoncesServices.js'
import {findById as findUserById} from '../../services/userServices.js'
import {findById as findAnimalById} from '../../services/animauxServices.js'
import { Annonce } from '../services/annonce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public annonces : [];

  constructor(public router : Router) { 
    this.annonces= findAll().map(a=>{
    const annonce = new Annonce(a)
    annonce.animal = findAnimalById(a.animalId)
    annonce.auteur = findUserById(a.auteurId)
    return annonce
    });
  }

  goToDetail(animal){
    this.router.navigate(['/detail-animal'], {state : { animal}});
  }

  clickOnLikeButton(annonce){
    console.log("J'ai cliquer sur le bouton like")
    console.log(annonce)
    if(annonce["liked"]){
      annonce["liked"] = false;
      this.removeFromFavoris(annonce);
    }else{
      annonce["liked"] = true;
      update(annonce)
      this.addToFavoris(annonce);
    }
  }

  addToFavoris(annonce){
    
  }

  removeFromFavoris(annonce){

  }
}
