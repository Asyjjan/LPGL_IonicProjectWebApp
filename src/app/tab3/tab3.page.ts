import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from '../services/annonce';
import {findAll} from '../../services/annoncesServices.js'
import {findById as findUserById} from '../../services/userServices.js'
import {findById as findAnimalById} from '../../services/animauxServices.js'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  pet: string = "chiens";
  public annonces : Annonce[];
  public likedAnnonces : Annonce[] = [];

  constructor(public router : Router) {
      this.annonces = findAll().map(a=>{
        const annonce = new Annonce(a)
        annonce.animal = findAnimalById(a.animalId)
        annonce.auteur = findUserById(a.auteurId)

        if(annonce.liked){
          this.likedAnnonces.push(annonce)
        }

        return annonce
      });
  }

  voirDetail() {
    this.router.navigate(['detail-animal']);
  }

}
