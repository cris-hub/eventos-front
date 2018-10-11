import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from '../../../model/experience-model';
import { experencesFakes } from '../../../test/fakes/experences.fake';
import { EventosService } from '../../../services/eventos.service';

@Component({
  selector: 'app-experiences-list',
  template: `
  <div class="container" >

  <div class="row" >
  <div class="col-md-12 " >
  <div  *ngFor="let experience of experiences"  class="col-md-3 " >

  <app-experiences-details 
 
  [experience] =experience>
  </app-experiences-details>

  </div>
  </div>
  </div>

  </div>
  `,
  styleUrls: ['./experiences-list.component.css'],

})
export class ExperiencesListComponent implements OnInit {
 public experiences : [ExperienceModel]
   
  constructor(private eventosService : EventosService) { }

  ngOnInit() {
    this.eventosService.getExperiencia().subscribe(res => {
      this.experiences = res;
    });
  }

}
