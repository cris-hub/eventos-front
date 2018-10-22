import { Component, OnInit } from '@angular/core';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { EventosService } from 'src/app/services/eventos.service';
import { Router } from '@angular/router';
import { CompanyModel } from 'src/app/model/company-model';
import { ReservationDataModel } from 'src/app/model/reservation-data-model';
import { HeadquarterFilterModel } from 'src/app/model/headquarter-filter-model';

@Component({
  selector: 'app-confirmation-reservation',
  templateUrl: './confirmation-reservation.component.html',
  styleUrls: ['./confirmation-reservation.component.css']
})
export class ConfirmationReservationComponent implements OnInit {
  private lounge: LoungeModel = LOUNGEFAKE[0]

  constructor(
    private evetosService: EventosService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  terminar() {
    this.evetosService.company = new CompanyModel()
    this.evetosService.reservation = new ReservationDataModel()
    this.evetosService.headquearterFilter = new HeadquarterFilterModel()
    this.router.navigate(['/experiencias'])
  }

}
