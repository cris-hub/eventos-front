import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from '../../model/experience-model';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { EventTypeModel } from '../../model/event-type-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeadquarterFilterModel } from '../../model/headquarter-filter-model';
import { HeaderService } from '../../services/header.service';
import { OwlDateTimeIntl, OWL_DATE_TIME_LOCALE, DateTimeAdapter } from 'ng-pick-datetime';
import { CalendarPicker } from '../../shared/calendar-picker';
import { NativeDateTimeAdapter } from 'ng-pick-datetime/date-time/adapter/native-date-time-adapter.class';
import { Platform } from '@angular/cdk/platform';
import { BreadcrumbsService } from 'ng6-breadcrumbs';

@Component({
  selector: 'app-filtro-sede',
  templateUrl: `./filtro-sede.component.html`,
  styleUrls: [`./filtro-sede.component.css`],
  providers: [
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'co' },
    { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE, Platform] },
    { provide: OwlDateTimeIntl, useClass: CalendarPicker }
  ]
})

export class FiltroSedeComponent implements OnInit {
  public eventsTypes: EventTypeModel[] = []
  public cities = []
  public formulario: FormGroup;

  public invalidDateTime2: any = ''
  constructor(
    private activeRoute: ActivatedRoute,
    private eventosService: EventosService,
    public headerService: HeaderService,
    private router: Router,
    private formBuilder: FormBuilder,
    private breadcrumbsService: BreadcrumbsService

  ) {
  }

  ngOnInit() {
    if (!this.eventosService.reservation.experience.id) {
      this.router.navigate([`/experiencias`])
    }

    this.consulterTiposEventos();
    this.getallcities();
    this.obtenerParamtrosRuta();
    console.log(this.activeRoute.snapshot.paramMap.get('experiencia'), this.eventosService.reservation.experience.id)

    this.consultarExperienciaSeleccionada(this.eventosService.reservation.experience.id);
    this.initFormulario();
  }
  initFormulario() {
    this.formulario = this.formBuilder.group({
      nameEvent: [this.eventosService.reservation.nameEvent],
      eventTypeId: [this.eventosService.reservation.experience.eventTypeId, Validators.required],
      amountAttendingEventChildren: [this.eventosService.headquearterFilter.amountAttendingEventChildren],
      amountAttendingEventAdults: [this.eventosService.headquearterFilter.amountAttendingEventAdults],
      dateStart: [this.eventosService.headquearterFilter.dateStart, Validators.required],
      dateFinish: [this.eventosService.headquearterFilter.dateFinish, Validators.required],
      cityId: [this.eventosService.headquearterFilter.cityId],
      capacity: [this.eventosService.headquearterFilter.amountAttendingEventChildren + this.eventosService.headquearterFilter.amountAttendingEventAdults]
    });

    this.ValidacionesFechas();




  }
  private ValidacionesFechas() {
    this.formulario.get('dateStart').valueChanges.subscribe(valorQueCambio => {
      let fechaActual = Date.now();
      if (valorQueCambio < fechaActual) {
        this.formulario.get('dateStart').setErrors({ error: 'La fecha debe ser mayor a la fecha actual ' });
      }
    });
    this.formulario.get('dateFinish').valueChanges.subscribe(valorQueCambio => {
      if (this.formulario.get('dateStart').value > this.formulario.get('dateFinish').value) {
        this.formulario.get('dateFinish').setErrors({ error: ' Esta fecha debe ser mayor a la fecha de inicio del evento' });
      }
    });
    this.formulario.get('dateStart').valueChanges.subscribe(valorQueCambio => {
      if (this.formulario.get('dateStart').value < this.formulario.get('dateFinish').value) {
        this.formulario.get('dateFinish').setErrors({ error: ' Esta fecha debe ser mayor a la fecha de inicio del evento' });
      }
    });
  }

  obtenerParamtrosRuta() {
    this.eventosService.reservation.experience.id = parseInt(this.activeRoute.snapshot.paramMap.get('experiencia'))
  }
  consultarExperienciaSeleccionada(id: number) {
    console.log(id)

    this.eventosService.getExperienceById(id).subscribe(response => {
      Object.assign(this.eventosService.reservation.experience, response);
      if (this.eventosService.reservation.experience.eventTypeId) {
        this.eventosService.headquearterFilter.eventType = this.eventosService.reservation.experience.eventTypeId
      }
      this.breadcrumbsService.store([
        { label: response.name, url: '/', params: [] }
      ])
      this.headerService.title = response.name
      this.headerService.subtitle = response.description
    })
  }
  consulterTiposEventos() {
    this.eventosService.getTiposEventos().subscribe(response => {
      console.log(response)
      Object.assign(this.eventsTypes, response);
    })
  }

  getallcities() {
    this.eventosService.getallcities().subscribe(response => {
      this.cities = response
    })
  }






  submit() {
    console.log(this.formulario)
    if (!this.formulario.valid) {
      return
    }
    this.formulario.get('capacity')
      .setValue(this.formulario.get('amountAttendingEventChildren').value + this.formulario.get('amountAttendingEventAdults').value)

    Object.assign(this.eventosService.reservation, this.formulario.value)
    Object.assign(this.eventosService.headquearterFilter, this.formulario.value)
    this.router.navigate([`/experiencia/${this.eventosService.reservation.experience.id}/sedes`])
  }
}
