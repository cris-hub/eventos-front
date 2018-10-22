import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from '../../../model/experience-model';
import { EventosService } from '../../../services/eventos.service';
<<<<<<< HEAD
import { HeaderService } from 'src/app/services/header.service';
=======
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.css'],

})
export class ExperiencesListComponent implements OnInit {
<<<<<<< HEAD
  public experiences: ExperienceModel[]

  constructor(
    private eventosService: EventosService,
    private headerService: HeaderService

  ) {
    headerService.title = 'Experiencias'
   }
=======
 public experiences : ExperienceModel[]
   
  constructor(private eventosService : EventosService) { }
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c

  ngOnInit() {
    this.eventosService.getExperiencias().subscribe(res => {
      this.experiences = res;
    });
  }

<<<<<<< HEAD
  selectExperience(experence : ExperienceModel) {
    let tempExperience : ExperienceModel = new ExperienceModel();
    Object.assign(tempExperience,experence)
    delete tempExperience.imagen
    Object.assign(this.eventosService.reservation.experience,tempExperience)
    debugger
  }


=======
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c
}
