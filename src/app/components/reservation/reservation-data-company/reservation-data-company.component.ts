import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
import { FormBuilder, FormGroup } from '@angular/forms';
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c
import { ActivatedRoute, Router } from '@angular/router';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { Location } from '@angular/common';
import { ExperienceModel } from '../../../model/experience-model';
<<<<<<< HEAD
import { EventosService } from '../../../services/eventos.service';
import { EXPERENCESFAKES } from 'src/app/test/fakes/experences.fake';
=======
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c

@Component({
  selector: 'app-reservation-data-company',
  templateUrl: `./reservation-data-company.component.html`,
  styleUrls: ['./reservation-data-company.component.css']
})
export class ReservationDataCompanyComponent implements OnInit {
<<<<<<< HEAD
  private lounge: LoungeModel = LOUNGEFAKE[0]
  public formulario: FormGroup;
  private experiencia: ExperienceModel = EXPERENCESFAKES[0]
=======
  private lounge : LoungeModel = LOUNGEFAKE[0]
  public formulario: FormGroup;
  private experiencia: ExperienceModel = new ExperienceModel()

>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
<<<<<<< HEAD
    private location: Location,
    private eventosService: EventosService

=======
    private location : Location
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c
  ) { }

  ngOnInit() {
    this.initFormulario();

  }

<<<<<<< HEAD
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
=======
  goBack(){
    this.location.back();
  }
  reservar() {
    console.log(this.lounge)
    console.log('experiencia/' + this.experiencia.id + '/sede/' + this.lounge.headquarterId + '/' + this.lounge.id);
    this.router.navigate([`/experiencia/${this.experiencia.id}/sede/${this.lounge.headquarterId}/${this.lounge.id}/detalle-reserva`])
}
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c


  initFormulario() {
    this.formulario = this.formBuilder.group({
<<<<<<< HEAD
      nameCompany: [this.eventosService.company.nameCompany, Validators.required],
      NIT: [this.eventosService.company.NIT, Validators.required],
      numberVerification: [this.eventosService.company.numberVerification, Validators.required],
      dateStart: [this.eventosService.company.dateStart, Validators.required],
      responsable: [this.eventosService.company.responsable, Validators.required],
      landline: [this.eventosService.company.landline, Validators.required],
      mobilePhone: [this.eventosService.company.mobilePhone, Validators.required],
      extLandline: [this.eventosService.company.extLandline],

=======
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c
    });
  }
}
