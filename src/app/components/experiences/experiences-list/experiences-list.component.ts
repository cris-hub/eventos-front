import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from '../../../model/experience-model';
import { experencesFakes } from '../../../test/fakes/experences.fake';

@Component({
  selector: 'app-experiences-list',
  template: `
  <div *ngFor="let experience of experiences">
  <app-experiences-details [experience] =experience>
  </app-experiences-details>
  </div>
  `,
  styleUrls: ['./experiences-list.component.css'],

})
export class ExperiencesListComponent implements OnInit {
 public experiences : [ExperienceModel]
   
  constructor() { }

  ngOnInit() {
    this.experiences = experencesFakes;
  }

}
