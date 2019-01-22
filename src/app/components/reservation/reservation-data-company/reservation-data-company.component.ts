import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { Location } from '@angular/common';
import { ExperienceModel } from '../../../model/experience-model';
import { EventosService } from '../../../services/eventos.service';
import { EXPERENCESFAKES } from '../../../test/fakes/experences.fake';
import { HeaderService } from '../../../services/header.service';
import { BreadcrumbsService } from 'ng6-breadcrumbs';

@Component({
  selector: 'app-reservation-data-company',
  templateUrl: `./reservation-data-company.component.html`,
  styleUrls: ['./reservation-data-company.component.css']
})
export class ReservationDataCompanyComponent implements OnInit {
  public lounge: LoungeModel
  public formulario: FormGroup;
  private experiencia: ExperienceModel = this.eventosService.experience
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private eventosService: EventosService,
    private headerService : HeaderService,
    private breadcrumbsService : BreadcrumbsService,
  ) {
    this.headerService.title = 'Reservar'
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
            url: `/experiencia/${this.eventosService.reservation.experience.id}/sede/${this.eventosService.reservation.headquarte.id}/${this.eventosService.reservation.lounge.id}/datos-empresa`, params: []
          },

        ])
        resolve();
      }, 0);
    });
  }

  ngOnInit() {

    this.initFormulario();
    this.lounge  =this.eventosService.reservation.lounge
    this.addMigas()

  }

  goBack() {
    this.location.back();
  }
  reservar() {
    console.log(this.formulario)
    if (!this.formulario.valid) {
      return
    }
    this.eventosService.company = this.formulario.value
    this.eventosService.reservation.company = this.formulario.value

    this.router.navigate([`/experiencia/${this.experiencia.id}/sede/${this.eventosService.reservation.headquarte.id}/${this.lounge.id}/detalle-reserva`])
  }


  initFormulario() {
    this.formulario = this.formBuilder.group({
      nameCompany: [this.eventosService.company.nameCompany, Validators.required],
      NIT: [this.eventosService.company.NIT, Validators.required],
      numberVerification: [this.eventosService.company.numberVerification, Validators.required],
      responsable: [this.eventosService.company.responsable, Validators.required],
      landline: [this.eventosService.company.landline, Validators.required],
      mobilePhone: [this.eventosService.company.mobilePhone, Validators.required],
      extLandline: [this.eventosService.company.extLandline],
      mail : [this.eventosService.company.mail,Validators.required]

    });
  }
}
