import { Component, OnInit } from '@angular/core';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { EventosService } from '../../../services/eventos.service';
import { Router } from '@angular/router';
import { CompanyModel } from '../../../model/company-model';
import { ReservationDataModel } from '../../../model/reservation-data-model';
import { HeadquarterFilterModel } from '../../../model/headquarter-filter-model';

@Component({
  selector: 'app-confirmation-reservation',
  templateUrl: './confirmation-reservation.component.html',
  styleUrls: ['./confirmation-reservation.component.css']
})
export class ConfirmationReservationComponent implements OnInit {
  public lounge: LoungeModel = LOUNGEFAKE[0]

  constructor(
    private eventosService: EventosService,
    private router: Router
  ) { }

  ngOnInit() {

    if (!this.eventosService.reservation.company.NIT) {
      this.router.navigate([`/experiencias`])
    }
    this.lounge = this.eventosService.reservation.lounge
     
  }

  terminar() {
    this.eventosService.company = new CompanyModel()
    this.eventosService.reservation = new ReservationDataModel()
    this.eventosService.headquearterFilter = new HeadquarterFilterModel()
    this.router.navigate(['/experiencias'])
  }

}
