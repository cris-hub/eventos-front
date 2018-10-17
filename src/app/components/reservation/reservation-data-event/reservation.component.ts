import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reservation',
  templateUrl: `reservation.component.html`,
  styleUrls: ['reservation.component.css']
})
export class ReservationComponent implements OnInit {
  private lounge : LoungeModel = LOUNGEFAKE[0]
  public formulario: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit() {
    this.initFormulario();

  }
  goBack(){
    this.location.back();
  }

  initFormulario() {
    this.formulario = this.formBuilder.group({
    });
  }
}
