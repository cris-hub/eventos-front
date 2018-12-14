import { Component, OnInit } from '@angular/core';
import { LoungeModel } from '../../../model/lounge-model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ExperienceModel } from '../../../model/experience-model';
import { EventosService } from '../../../services/eventos.service';
import { ReservationDataModel } from '../../../model/reservation-data-model';
import { HeadquarterFilterModel } from '../../../model/headquarter-filter-model';
import { CompanyModel } from '../../../model/company-model';
import { BreadcrumbsService } from 'ng6-breadcrumbs';
import { ReservationService } from 'src/app/services/reservation.service';
import { MailService } from 'src/app/services/mail.service';
import { MailModel } from 'src/app/model/mail-model';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.css']
})
export class ReservationSummaryComponent implements OnInit {
  public lounge: LoungeModel

  public formulario: FormGroup;
  private experiencia: ExperienceModel = new ExperienceModel()
  public reservation: ReservationDataModel = new ReservationDataModel();
  public company: CompanyModel = new CompanyModel()
  public headquearterFilter: HeadquarterFilterModel = new HeadquarterFilterModel()


  constructor(
    private router: Router,
    private location: Location,
    private eventosService: EventosService,
    private reservaService: ReservationService,
    private breadcrumbsService: BreadcrumbsService,
    private mailService: MailService,
    private formBuilder :FormBuilder
  ) {
    if (!this.eventosService.reservation.experience.id) {
      this.router.navigate([`/experiencias`])
    }
  }


  addMigas() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.breadcrumbsService.store([
          { label: this.eventosService.reservation.experience.name, url: '/experiencia/' + this.eventosService.reservation.experience.id, params: [] },
          { label: 'sedes', url: `/experiencia/${this.eventosService.reservation.experience.id}/sedes`, params: [] },
          {
            label: `armar evento`,
            url: `/experiencia/${this.eventosService.reservation.experience.id}/sede/${this.eventosService.reservation.headquarte.id}/${this.eventosService.reservation.lounge.id}/reserva`, params: []
          },
          {
            label: `Dinos quien eres`,
            url: `/experiencia/${this.eventosService.reservation.experience.id}/sede/${this.eventosService.reservation.headquarte.id}/${this.eventosService.reservation.lounge.id}/reserva/datos-empresa`, params: []
          },
          {
            label: `Detalle reserva`,
            url: `/experiencia/${this.eventosService.reservation.experience.id}/sede/${this.eventosService.reservation.headquarte.id}/${this.eventosService.reservation.lounge.id}/detalle-reserva`, params: []
          },

        ])
        resolve();
      }, 0);
    });
  }

  ngOnInit() {
   
    this.initFormulario()
    this.lounge = this.eventosService.reservation.lounge
    Object.assign(this.reservation, this.eventosService.reservation);
    Object.assign(this.company, this.eventosService.company);
    Object.assign(this.headquearterFilter, this.eventosService.headquearterFilter);
    this.addMigas();

  }
  goBack() {
    this.location.back();
  }
  reservar() {
    console.log(this.lounge)
    console.log('experiencia/' + this.experiencia.id + '/sede/' + this.lounge.headquarterId + '/' + this.lounge.id);
    let reservaJsonString = JSON.stringify(this.eventosService.reservation)
    let mail: MailModel = new MailModel()
    mail.content= reservaJsonString;
    mail.to = this.eventosService.company.mail;
    mail.copyyCC = this.eventosService.reservation.headquarte.emails.split(';');
    debugger

    this.reservaService.createReservation(this.company.NIT, reservaJsonString).subscribe(response => {
      console.log(response)
      if (response) {
        this.mailService.SentMessage(mail).subscribe(res => {
          
        })
      }
      this.router.navigate([`/experiencia/${this.experiencia.id}/sede/${this.lounge.headquarterId}/${this.lounge.id}`])
    });
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
      termsAndConditions : [this.eventosService.reservation.company.termsAndConditions],

      

    });
    this.formulario.disable()
    this.formulario.get('termsAndConditions').enable()
    this.formulario.get('hasOthers').valueChanges.subscribe(val => {
      console.log(val)
      this.formulario.get('others').setValue('');
    })
  }

}
