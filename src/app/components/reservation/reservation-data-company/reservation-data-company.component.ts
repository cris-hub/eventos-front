import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { Location } from '@angular/common';
import { ExperienceModel } from '../../../model/experience-model';
import { EventosService } from '../../../services/eventos.service';
import { EXPERENCESFAKES } from 'src/app/test/fakes/experences.fake';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-reservation-data-company',
  templateUrl: `./reservation-data-company.component.html`,
  styleUrls: ['./reservation-data-company.component.css']
})
export class ReservationDataCompanyComponent implements OnInit {
  private lounge: LoungeModel = LOUNGEFAKE[0]
  public formulario: FormGroup;
  private experiencia: ExperienceModel = EXPERENCESFAKES[0]
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private eventosService: EventosService,
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
  reservar() {
    console.log(this.formulario)
    if (!this.formulario.valid) {
      return
    }
    this.eventosService.company = this.formulario.value
    this.eventosService.reservation.company = this.formulario.value

    this.router.navigate([`/experiencia/${this.experiencia.id}/sede/${this.lounge.headquarterId}/${this.lounge.id}/detalle-reserva`])
  }


  initFormulario() {
    this.formulario = this.formBuilder.group({
      nameCompany: [this.eventosService.company.nameCompany, Validators.required],
      NIT: [this.eventosService.company.NIT, Validators.required],
      numberVerification: [this.eventosService.company.numberVerification, Validators.required],
      dateStart: [this.eventosService.company.dateStart, Validators.required],
      responsable: [this.eventosService.company.responsable, Validators.required],
      landline: [this.eventosService.company.landline, Validators.required],
      mobilePhone: [this.eventosService.company.mobilePhone, Validators.required],
      extLandline: [this.eventosService.company.extLandline],

    });
  }
}
