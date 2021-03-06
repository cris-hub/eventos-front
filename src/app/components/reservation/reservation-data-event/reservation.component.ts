import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { Location } from '@angular/common';
import { EventosService } from '../../../services/eventos.service';
import { HeaderService } from '../../../services/header.service';
import { BreadcrumbsService } from 'ng6-breadcrumbs';

@Component({
  selector: 'app-reservation',
  templateUrl: `reservation.component.html`,
  styleUrls: ['reservation.component.css']
})
export class ReservationComponent implements OnInit {
  public lounge: LoungeModel
  public formulario: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private eventosService: EventosService,
    private headerService: HeaderService,
    private breadcrumbsService: BreadcrumbsService

  ) {
    this.headerService.title = 'Reservar'
    this.headerService.subtitle = ''

  }

  addMigas() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.breadcrumbsService.store([
          { label: this.eventosService.reservation.experience.name, url: '/experiencia/' + this.eventosService.reservation.experience.id, params: [] },
          { label: 'sedes', url: `/experiencia/${this.eventosService.reservation.experience.id}/sedes`, params: [] },
          {
            label: `armar evento`,
            url: `/experiencia/${this.eventosService.reservation.experience.id}/sedes/${this.eventosService.reservation.headquarte.id}/${this.eventosService.reservation.lounge.id}`, params: []
          },

        ])
        resolve();
      }, 0);



    });
  }

  ngOnInit() {

    this.startScrollPage()
    if (!this.eventosService.reservation.experience.id) {
      this.router.navigate([`/experiencias`])
    }
    this.addMigas().then();

    this.initFormulario();
    this.lounge = this.eventosService.reservation.lounge
  }


  private startScrollPage() {
    this.router.events.subscribe((evt) => {
   
      window.scrollTo(0, 0);
    });
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
      others: [this.eventosService.reservation.others],


    });

    this.formulario.get('hasOthers').valueChanges.subscribe(val => {
      console.log(val)
      this.formulario.get('others').setValue('');
    })
  }

  submit() {
    if (this.formulario.invalid) {
      return
    }
    Object.assign(this.eventosService.reservation,this.formulario.value);
let urlNavigate = `${this.router.url}/datos-empresa`
this.router.navigate([`/${urlNavigate}`]);
  }
}
