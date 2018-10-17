import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { Location } from '@angular/common';
import { ExperienceModel } from '../../../model/experience-model';

@Component({
  selector: 'app-reservation-data-company',
  templateUrl: `./reservation-data-company.component.html`,
  styleUrls: ['./reservation-data-company.component.css']
})
export class ReservationDataCompanyComponent implements OnInit {
  private lounge : LoungeModel = LOUNGEFAKE[0]
  public formulario: FormGroup;
  private experiencia: ExperienceModel = new ExperienceModel()

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location : Location
  ) { }

  ngOnInit() {
    this.initFormulario();

  }

  goBack(){
    this.location.back();
  }
  reservar() {
    console.log(this.lounge)
    console.log('experiencia/' + this.experiencia.id + '/sede/' + this.lounge.headquarterId + '/' + this.lounge.id);
    this.router.navigate([`/experiencia/${this.experiencia.id}/sede/${this.lounge.headquarterId}/${this.lounge.id}/detalle-reserva`])
}


  initFormulario() {
    this.formulario = this.formBuilder.group({
    });
  }
}
