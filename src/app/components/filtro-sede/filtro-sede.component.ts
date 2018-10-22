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

@Component({
  selector: 'app-filtro-sede',
  templateUrl: `./filtro-sede.component.html`,
  styleUrls: [`./filtro-sede.component.css`],
  providers : [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'co'},
    {provide: DateTimeAdapter, useClass: NativeDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE, Platform]},
    {provide: OwlDateTimeIntl, useClass: CalendarPicker}
    ]
})

export class FiltroSedeComponent implements OnInit {
  public eventsTypes: EventTypeModel[] = []
  public formulario: FormGroup;

  public invalidDateTime2 : any = ''
  constructor(
    private activeRoute: ActivatedRoute,
    private eventosService: EventosService,
    public headerService: HeaderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.headerService.title = 'Buscar Salones'
  }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.paramMap.get('experiencia'))
    this.consulterTiposEventos();
    this.obtenerParamtrosRuta();
    this.consultarExperienciaSeleccionada(this.eventosService.experience.id);
    this.initFormulario();
  }
  initFormulario() {
    this.formulario = this.formBuilder.group({
      nameEvent : [this.eventosService.reservation.nameEvent],
      eventTypeId: [this.eventosService.headquearterFilter.eventType,Validators.required],
      amountAttendingEventChildren: [this.eventosService.headquearterFilter.amountAttendingEventChildren],
      amountAttendingEventAdults: [this.eventosService.headquearterFilter.amountAttendingEventAdults],
      dateStart: [this.eventosService.headquearterFilter.dateStart],
      dateFinish: [this.eventosService.headquearterFilter.dateFinish],
      cityId: [this.eventosService.headquearterFilter.cityId],
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
    this.eventosService.experience.id = parseInt(this.activeRoute.snapshot.paramMap.get('experiencia'))
  }
  consultarExperienciaSeleccionada(id: number) {
    this.eventosService.getExperienciaPorId(id).subscribe(response => {
      Object.assign(this.eventosService.experience, response);
      this.eventosService.headquearterFilter.eventType = this.eventosService.experience.eventTypeId
      console.log(this.eventosService.experience,this.eventosService.headquearterFilter.eventType)
    })
  }
  consulterTiposEventos() {
    this.eventosService.getTiposEventos().subscribe(response => {
      console.log(response)
      Object.assign(this.eventsTypes, response);
    })
  }
  filtrarSedesPorCamposFormulario() {
    this.eventosService.getHeadquarterByExperence(this.eventosService.experience.eventTypeId, 1)
  }

  selectTypeEvent(typeEvent){
    console.log(typeEvent)
    debugger
  }

  submit() {
    console.log(this.formulario)
    if (!this.formulario.valid) {
      return  
    }
    Object.assign(this.eventosService.reservation,this.formulario.value)
    Object.assign(this.eventosService.headquearterFilter,this.formulario.value)

    this.router.navigate([`/experiencia/${this.eventosService.experience.id}/sedes`])
  }
}
