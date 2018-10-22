import { Component, OnInit } from '@angular/core';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ExperienceModel } from '../../../model/experience-model';
import { EventosService } from '../../../services/eventos.service';
import { ReservationDataModel } from '../../../model/reservation-data-model';
import { HeadquarterFilterModel } from '../../../model/headquarter-filter-model';
import { CompanyModel } from '../../../model/company-model';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.css']
})
export class ReservationSummaryComponent implements OnInit {
  private lounge: LoungeModel = LOUNGEFAKE[0]
  public formulario: FormGroup;
  private experiencia: ExperienceModel = new ExperienceModel()
  public reservation: ReservationDataModel = new ReservationDataModel();
  public company : CompanyModel = new CompanyModel()
  public headquearterFilter: HeadquarterFilterModel = new HeadquarterFilterModel()

  
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private eventosService: EventosService
  ) { }

  ngOnInit() {
    debugger
    if (!this.eventosService.reservation.company.NIT) {
    this.router.navigate([`/experiencias`])
      
    }
    Object.assign(this.reservation, this.eventosService.reservation);
    Object.assign(this.company, this.eventosService.company);
    Object.assign(this.headquearterFilter, this.eventosService.headquearterFilter);

  }
  goBack() {
    this.location.back();
  }
  reservar() {
    console.log(this.lounge)
    console.log('experiencia/' + this.experiencia.id + '/sede/' + this.lounge.headquarterId + '/' + this.lounge.id);
    this.eventosService.createReservation(this.company.NIT,this.eventosService.reservation).subscribe(response => {
      console.log(response)
      if (response) {
    this.router.navigate([`/experiencia/${this.experiencia.id}/sede/${this.lounge.headquarterId}/${this.lounge.id}`])
        
      }
    });
  }



}
