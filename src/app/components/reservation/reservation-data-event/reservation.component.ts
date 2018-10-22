import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { Location } from '@angular/common';
import { EventosService } from '../../../services/eventos.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-reservation',
  templateUrl: `reservation.component.html`,
  styleUrls: ['reservation.component.css']
})
export class ReservationComponent implements OnInit {
  private lounge: LoungeModel = LOUNGEFAKE[0]
  public formulario: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private eventosService : EventosService,
    private headerService : HeaderService

  ) { 
    this.headerService.title = 'Reservar'
  }

  ngOnInit() {
    this.initFormulario();

  }
  goBack() {
    this.location.back();
  }

  initFormulario() {
    this.formulario = this.formBuilder.group({
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
  }
}
