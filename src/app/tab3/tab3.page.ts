import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from '../services/annonce';
import {
  findAll as findAllAnnonces,
  update,
} from '../../services/annoncesServices.js';
import { findById as findUserById } from '../../services/userServices.js';
import { findById as findAnimalById } from '../../services/animauxServices.js';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public annonces: Annonce[];
  public likedAnnonces: Annonce[] = [];

  constructor(public router: Router) {}

  ionViewWillEnter() {
    this.likedAnnonces = [];
    findAllAnnonces().map((a) => {
      const annonce = new Annonce(a);
      annonce.animal = findAnimalById(a.animalId);
      annonce.auteur = findUserById(a.auteurId);

      if (annonce.liked) {
        this.likedAnnonces.push(annonce);
      }
    });
  }
  goToDetail(animal) {
    this.router.navigate(['/detail-animal'], { state: { animal } });
  }
  removeFavoris(annonce) {
    annonce.liked = false;
    update(annonce);
    this.likedAnnonces = this.likedAnnonces.filter(
      (a) => a['_annonceId'] != annonce['_annonceId']
    );
  }
}
