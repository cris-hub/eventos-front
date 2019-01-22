import { Component, OnInit, AfterContentInit, DoCheck, AfterContentChecked, AfterViewChecked, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ExperienceModel } from '../../../model/experience-model';
import { EventosService } from '../../../services/eventos.service';
import { HeaderService } from '../../../services/header.service';
import { BreadcrumbsService } from 'ng6-breadcrumbs';
import { Observable, Subject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.css'],

})
export class ExperiencesListComponent implements OnInit {

  public experiences: ExperienceModel[] = []


  constructor(
    private eventosService: EventosService,
    private headerService: HeaderService,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.headerService.title = 'Experiencias'
    this.headerService.subtitle = ''
    this.headerService.showButtomBack = false

  }

  ngOnInit() {

    this.eventosService.getExperiencias().pipe(
      retry(3), // reintentar una solicitud fallida hasta 3 veces
    ).subscribe(res => {
      this.breadcrumbsService.storePrefixed(
        { label: 'Experiencias', url: '/', params: [] }
      )
      this.experiences = res;
    });
  }

  selectExperience(experence: ExperienceModel) {
    let tempExperience: ExperienceModel = new ExperienceModel();
    Object.assign(tempExperience, experence)
    delete tempExperience.imagen
    Object.assign(this.eventosService.reservation.experience, tempExperience)
  }


}
