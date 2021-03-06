import { Component, OnInit } from '@angular/core';
import { HeadquarteModel } from '../../../model/headquarte-model';
import { EventosService } from '../../../services/eventos.service';
import { HeaderService } from '../../../services/header.service';
import { BreadcrumbsService } from 'ng6-breadcrumbs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headquarter-list',
  templateUrl: './headquarter-list.component.html',
  styleUrls: ['./headquarter-list.component.css']
})
export class HeadquarterListComponent implements OnInit {
  public headquarters: HeadquarteModel[] = []
  constructor(
    private eventosService: EventosService,
    private headerService: HeaderService,
    private breadcrumbsService: BreadcrumbsService,
    private router: Router,


  ) {
    this.headerService.title = 'Nuestras sedes'
    this.headerService.subtitle = ''
    if (!this.eventosService.reservation.experience.id) {
      this.router.navigate([`/experiencias`])
    }
  }

  ngOnInit() {
    this.startScrollPage()
    this.getHeadquarterByExperence();
  }

  private startScrollPage() {
    this.router.events.subscribe((evt) => {
   
      window.scrollTo(0, 0);
    });
  }
  getHeadquarterByExperence() {
    this.eventosService.getHeadquarterByExperence(
      this.eventosService.reservation.experience.id,
      this.eventosService.headquearterFilter.capacity,
      this.eventosService.headquearterFilter.cityId  
    ).subscribe(response => {
      this.breadcrumbsService.store([
        { label:   this.eventosService.reservation.experience.name , url: '/experiencia/' + this.eventosService.reservation.experience.id , params: [] },
        { label:   'sedes' , url: '/experiencia/' + this.eventosService.reservation.experience.id + '/sedes' , params: [] }
      ])
      Object.assign(this.headquarters, response);
    });
  }
  selectHeadquarter(headquarter: HeadquarteModel) {
    let tempHeadquarte: HeadquarteModel = new HeadquarteModel();
    Object.assign(tempHeadquarte, headquarter)
    Object.assign(this.eventosService.reservation.headquarte, tempHeadquarte)

  }
}
