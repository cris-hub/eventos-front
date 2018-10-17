import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from '../../model/experience-model';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { EventTypeModel } from '../../model/event-type-model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-sede',
  templateUrl: `./filtro-sede.component.html`,
  styleUrls: [`./filtro-sede.component.css`]
})
export class FiltroSedeComponent implements OnInit {
  public eventsTypes: EventTypeModel[] = []
  public formulario: FormGroup;
  constructor(
    private activeRoute: ActivatedRoute,
    private eventosService: EventosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.paramMap.get('experiencia'))
    this.initFormulario();
    this.obtenerParamtrosRuta();
    this.consulterTiposEventos();
    this.consultarExperienciaSeleccionada(this.eventosService.experience.id);
  }
  initFormulario() {
    this.formulario = this.formBuilder.group({
      eventTypeId: [this.eventosService.experience.eventTypeId],
      cantidadAsistentesNiños: [],
      cantidadAsistentesAdultos: [],
      fechaInicio: [],
      fechaFin: [],
    });
  }
  obtenerParamtrosRuta() {
    this.eventosService.experience.id = parseInt(this.activeRoute.snapshot.paramMap.get('experiencia'))
  }
  consultarExperienciaSeleccionada(id: number) {
    this.eventosService.getExperienciaPorId(id).subscribe(response => {
      Object.assign(this.eventosService.experience, response);
    })
  }
  consulterTiposEventos() {
    this.eventosService.getTiposEventos().subscribe(response => {
      console.log(response)
      Object.assign(this.eventsTypes, response);
    })
  }
  filtrarSedesPorCamposFormulario() {
  
  }

  submit() {
    this.router.navigate(['/experiencia/1/sedes'])
  }
}
