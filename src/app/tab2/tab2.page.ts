import { Component } from '@angular/core';
import { findAll } from '../../services/annoncesServices.js'
import { findById as findUserById } from '../../services/userServices.js'
import { findById as findAnimalById, findAllPath } from '../../services/animauxServices.js'
import _ from 'lodash'
import { Annonce } from '../services/annonce';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public annonces: [];
  private filters = {};
  public searchQuery = "";
  constructor(public router: Router) {
    this.annonces = findAll().map(a => {

      const annonce = new Annonce(a)
      annonce.animal = findAnimalById(a.animalId)
      annonce.auteur = findUserById(a.auteurId)
      return annonce
    });

  }

  getFilteredData() {
    const searched = this.annonces.filter((annonce: Annonce) => annonce.animal.nom.toLowerCase().includes(this.searchQuery.toLowerCase()))
    if (Object.entries(this.filters).length === 0) return searched
    const filteredData = searched.filter(({ animal: data }) => {
      return Object.keys(this.filters).every(filter => {
        return this.filters[filter] === data[filter]
      })
    })
    return filteredData;

  }

  goToDetail(animal) {
    this.router.navigate(['/detail-animal'], { state: { animal } });
  }

  getEspeces(): [] {
    return findAllPath("espece");
  }
  getGenre(): [] {
    return findAllPath("genre");
  }

  getLieux(): [] {
    return findAllPath("lieu")
  }
  onFilterChange(pathFilter, event) {
    const { value } = event.target
    if (value === "") { delete this.filters[pathFilter]; return }
    this.filters[pathFilter] = value;
  }
}
