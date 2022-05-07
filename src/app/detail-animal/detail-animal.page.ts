import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../services/animal';

@Component({
  selector: 'app-detail-animal',
  templateUrl: './detail-animal.page.html',
  styleUrls: ['./detail-animal.page.scss'],
})
export class DetailAnimalPage implements OnInit {
  animal :Animal;

  constructor(public router: Router) { 
    this.animal = router.getCurrentNavigation().extras.state.animal as Animal
  }

  ngOnInit() {

  }

}
