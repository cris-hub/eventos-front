import { Component, OnInit } from '@angular/core';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { FormGroup, FormBuilder } from '../../../../../node_modules/@angular/forms';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { Location } from '../../../../../node_modules/@angular/common';
import { ExperienceModel } from '../../../model/experience-model';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.css']
})
export class ReservationSummaryComponent implements OnInit {
  private lounge: LoungeModel = LOUNGEFAKE[0]
  public formulario: FormGroup;
  private experiencia: ExperienceModel = new ExperienceModel()

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit() {
    this.initFormulario();
  }
  goBack() {
    this.location.back();
  }
  reservar() {
    console.log(this.lounge)
    console.log('experiencia/' + this.experiencia.id + '/sede/' + this.lounge.headquarterId + '/' + this.lounge.id);
    this.router.navigate([`/experiencia/${this.experiencia.id}/sede/${this.lounge.headquarterId}/${this.lounge.id}`])
}

  initFormulario() {
    this.formulario = this.formBuilder.group({
    });
  }
}
