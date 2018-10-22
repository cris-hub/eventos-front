import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { Location } from '@angular/common';
<<<<<<< HEAD
import { EventosService } from '../../../services/eventos.service';
=======
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c

@Component({
  selector: 'app-reservation',
  templateUrl: `reservation.component.html`,
  styleUrls: ['reservation.component.css']
})
export class ReservationComponent implements OnInit {
<<<<<<< HEAD
  private lounge: LoungeModel = LOUNGEFAKE[0]
=======
  private lounge : LoungeModel = LOUNGEFAKE[0]
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c
  public formulario: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
<<<<<<< HEAD
    private location: Location,
    private eventosService : EventosService
=======
    private location: Location
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c
  ) { }

  ngOnInit() {
    this.initFormulario();

  }
<<<<<<< HEAD
  goBack() {
=======
  goBack(){
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c
    this.location.back();
  }

  initFormulario() {
    this.formulario = this.formBuilder.group({
<<<<<<< HEAD
      hasBreakfast: [this.eventosService.reservation.hasBreakfast],
      hasLunch: [this.eventosService.reservation.hasLunch],
      hasRefreshmentAM: [this.eventosService.reservation.hasRefreshmentAM],
      hasRefreshmentPM: [this.eventosService.reservation.hasRefreshmentPM],
      hasDinner: [this.eventosService.reservation.hasDinner],
      hasIllumination: [this.eventosService.reservation.hasIllumination],
      hasProfessionalSound: [this.eventosService.reservation.hasProfessionalSound],
      hasPallet: [this.eventosService.reservation.hasPallet],
      hasTent: [this.eventosService.reservation.hasTent],
      hasDedicatedChannel: [this.eventosService.reservation.hasDedicatedChannel],
      hasSpeaker: [this.eventosService.reservation.hasSpeaker],
      hasArtPresentations: [this.eventosService.reservation.hasArtPresentations],
      hasTransport: [this.eventosService.reservation.hasTransport],
      hasOthers: [this.eventosService.reservation.hasOthers],
      Others: [this.eventosService.reservation.others],


    });
    this.formulario.get('hasOthers').valueChanges.subscribe(val => {
      console.log(val)
      this.formulario.get('Others').setValue('');
    })
=======
    });
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c
  }
}
