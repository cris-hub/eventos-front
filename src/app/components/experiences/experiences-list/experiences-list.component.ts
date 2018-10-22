import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from '../../../model/experience-model';
import { EventosService } from '../../../services/eventos.service';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.css'],

})
export class ExperiencesListComponent implements OnInit {
  public experiences: ExperienceModel[]

  constructor(
    private eventosService: EventosService,
    private headerService: HeaderService

  ) {
    headerService.title = 'Experiencias'
   }

  ngOnInit() {
    this.eventosService.getExperiencias().subscribe(res => {
      this.experiences = res;
    });
  }

  selectExperience(experence : ExperienceModel) {
    let tempExperience : ExperienceModel = new ExperienceModel();
    Object.assign(tempExperience,experence)
    delete tempExperience.imagen
    Object.assign(this.eventosService.reservation.experience,tempExperience)
    debugger
  }


}
