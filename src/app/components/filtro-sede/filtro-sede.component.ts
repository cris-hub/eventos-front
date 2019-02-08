import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from '../../model/experience-model';
import { ActivatedRoute, Router, Data, NavigationEnd } from '@angular/router';
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
    this.headerService.showButtomBack = true
    if (!this.eventosService.reservation.experience.id) {
      
      this.router.navigate([`/experiencias`])
    }
  }

  ngOnInit() {

    this.startScrollPage();
  
    this.consulterTiposEventos();
    this.getallcities();
    this.obtenerParamtrosRuta();
    console.log(this.activeRoute.snapshot.paramMap.get('experiencia'), this.eventosService.reservation.experience.id)

    this.consultarExperienciaSeleccionada(this.eventosService.reservation.experience.id);
    this.initFormulario();
  }
  private startScrollPage() {
    this.router.events.subscribe((evt) => {
   
      window.scrollTo(0, 0);
    });
  }

  initFormulario() {
    this.formulario = this.formBuilder.group({
      nameEvent: [this.eventosService.reservation.nameEvent],
      eventTypeId: [this.eventosService.reservation.experience.eventTypeId, Validators.required],
      amountAttendingEventChildren: [this.eventosService.headquearterFilter.amountAttendingEventChildren],
      amountAttendingEventAdults: [this.eventosService.headquearterFilter.amountAttendingEventAdults],
      dateStart: [this.eventosService.headquearterFilter.dateStart],
     
      dateFinish: [this.eventosService.headquearterFilter.dateFinish],
      cityId: [this.eventosService.headquearterFilter.cityId],
      capacity: [this.eventosService.headquearterFilter.amountAttendingEventChildren + this.eventosService.headquearterFilter.amountAttendingEventAdults]
    }, { validator: this.dateValidation('dateStart', 'dateFinish') });

  }

  private dateValidation(dateStart: string, dateFinish: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let s :Date = group.controls[dateStart].value;
      let f :Date= group.controls[dateFinish].value;
      let n = new Date();
      n.setDate(n.getDate()+1)
      n.setHours(0,0,0,0)
      if (s > f) {
        return {
          dates: "La fecha de claudicación del evento  debe ser mayor a la fecha inicial   "
        };
      } else if (s < n) {
        return {
          dates: "El dia de inicio debe ser mayor al actual"
        };
      }
      return {};
    }
  }


  private ValidacionesFechas() {

    //cambio fecha inicio
    this.formulario.get('dateStart').valueChanges.subscribe((valorQueCambio: Date) => {
      let fechaActual = new Date();
      let dateFinish: Date = this.formulario.get('dateFinish').value
      console.log(valorQueCambio, dateFinish, 'x');
      debugger
      if (valorQueCambio > dateFinish) {
        console.log(valorQueCambio, this.formulario.get('dateFinish').value, '0');
        this.formulario.get('dateStart').setErrors({ error: ' Esta fecha debe ser menor a la fecha de fin del evento' });
      }
      else if (valorQueCambio.toString() == dateFinish.toString()) {
        console.log(valorQueCambio, this.formulario.get('dateFinish').value, '1');
        this.formulario.get('dateStart').setErrors({ error: 'Esta fecha no puede ser igual a la fecha fin' });
      } else if (valorQueCambio < fechaActual) {
        this.formulario.get('dateStart').setErrors({ error: 'La fecha debe ser mayor a la fecha actual ' });
      }
      else {
        this.formulario.get('dateStart').setErrors(null);
        this.formulario.get('dateFinish').setValidators(null);
      }

    });



    // cambio fecha dfrin
    this.formulario.get('dateFinish').valueChanges.subscribe(valorQueCambio => {
      let dateStart: Date = this.formulario.get('dateFinish').value
      if (valorQueCambio < dateStart) {
        this.formulario.get('dateFinish').setErrors({ error: ' Esta fecha debe ser mayor a la fecha de inicio del evento' });
      }

      else if (valorQueCambio.toString() == dateStart.toString()) {
        this.formulario.get('dateFinish').setErrors({ error: ' Esta fecha no puede ser igual a la fecha inicio' });
      } else {
        this.formulario.get('dateFinish').setErrors(null);
        this.formulario.get('dateFinish').setValidators(null);


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
