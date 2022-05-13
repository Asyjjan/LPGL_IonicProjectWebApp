import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {
  findAll as findAllAnnonces,
  update,
} from '../../services/annoncesServices.js';

import { findById as findUserById } from '../../services/userServices.js';
import {
  findById as findAnimalById,
  findAllPath,
} from '../../services/animauxServices.js';
import _ from 'lodash';
import { Annonce } from '../services/annonce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public annonces: Annonce[];

  constructor(public router: Router) {
    this.annonces = findAllAnnonces().map((a) => {
      const annonce = new Annonce(a);
      annonce.animal = findAnimalById(a.animalId);
      annonce.auteur = findUserById(a.auteurId);
      return annonce;
    });

    this.annonces = this.annonces.slice(0, 3);
  }
}
