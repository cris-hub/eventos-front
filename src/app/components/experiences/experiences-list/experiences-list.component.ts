import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from '../../../model/experience-model';
import { EventosService } from '../../../services/eventos.service';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.css'],

})
export class ExperiencesListComponent implements OnInit {
 public experiences : ExperienceModel[]
   
  constructor(private eventosService : EventosService) { }

  ngOnInit() {
    this.eventosService.getExperiencias().subscribe(res => {
      this.experiences = res;
    });
  }

}
