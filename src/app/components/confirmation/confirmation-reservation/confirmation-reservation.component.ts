import { Component, OnInit } from '@angular/core';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';

@Component({
  selector: 'app-confirmation-reservation',
  templateUrl: './confirmation-reservation.component.html',
  styleUrls: ['./confirmation-reservation.component.css']
})
export class ConfirmationReservationComponent implements OnInit {
  private lounge : LoungeModel = LOUNGEFAKE[0]

  constructor() { }

  ngOnInit() {
  }

}
