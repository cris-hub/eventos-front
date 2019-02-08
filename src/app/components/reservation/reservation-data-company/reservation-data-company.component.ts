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
import { trigger, transition, style, animate } from '../../../../../node_modules/@angular/animations';
import { DOCUMENT_TYPE_ENUM } from '../../../enum/document-type-enum';

@Component({
  selector: 'app-reservation-data-company',
  templateUrl: `./reservation-data-company.component.html`,
  styleUrls: ['./reservation-data-company.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ReservationDataCompanyComponent implements OnInit {
  public lounge: LoungeModel
  public formulario: FormGroup;
  private experiencia: ExperienceModel = this.eventosService.experience
  public readonly NIT: number = DOCUMENT_TYPE_ENUM.NIT
  public readonly CEDULA: number = DOCUMENT_TYPE_ENUM.CEDULA
  public readonly CEDULA_EXTRANJERIA: number = DOCUMENT_TYPE_ENUM.CEDULA_EXTRANJERIA

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private eventosService: EventosService,
    private headerService: HeaderService,
    private breadcrumbsService: BreadcrumbsService,
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
            label: `dinos quien eres`,
            url: `/experiencia/${this.eventosService.reservation.experience.id}/sede/${this.eventosService.reservation.headquarte.id}/${this.eventosService.reservation.lounge.id}/datos-empresa`, params: []
          },

        ])
        resolve();
      }, 0);
    });
  }

  ngOnInit() {
    this.startScrollPage()
    this.initFormulario();
    this.lounge = this.eventosService.reservation.lounge
    this.addMigas()

  }
  private startScrollPage() {
    this.router.events.subscribe((evt) => {

      window.scrollTo(0, 0);
    });
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
    this.eventosService.person = this.formulario.value
    this.eventosService.reservation.company = this.formulario.value
    this.eventosService.reservation.person = this.formulario.value

    this.router.navigate([`/experiencia/${this.eventosService.reservation.experience.id}/sede/${this.eventosService.reservation.headquarte.id}/${this.lounge.id}/detalle-reserva`])
  }


  initFormulario() {
    this.formulario = this.formBuilder.group({
      typeDocument: [this.eventosService.typeDoc, Validators.required],
      //company
      landlineCompany: [this.eventosService.company.landlineCompany],
      extLandline: [this.eventosService.company.extLandline],
      mobilePhoneCompany: [this.eventosService.company.mobilePhoneCompany],
      mailCompany: [this.eventosService.company.mailCompany],
      numberVerification: [this.eventosService.company.numberVerification],
      responsableCompany: [this.eventosService.company.responsableCompany],
      nameCompany: [this.eventosService.company.nameCompany],
      NIT: [this.eventosService.company.NIT],
      //person      
      namePerson: [this.eventosService.person.namePerson],
      landlinePerson: [this.eventosService.person.landlinePerson],
      mobilePhonePerson: [this.eventosService.person.mobilePhonePerson],
      mailPerson: [this.eventosService.person.mailPerson],
      cedula: [this.eventosService.person.cedula],
      responsablePerson: [this.eventosService.person.responsablePerson],

    });
  }

  updateStructureForm(typeDoc: number) {
    debugger
    this.eventosService.typeDoc = typeDoc
    if (DOCUMENT_TYPE_ENUM.NIT == typeDoc) {
      this.formulario = this.formBuilder.group({
        typeDocument: [this.eventosService.typeDoc, Validators.required],
        //company
        landlineCompany: [this.eventosService.company.landlineCompany],
        extLandline: [this.eventosService.company.extLandline],
        mobilePhoneCompany: [this.eventosService.company.mobilePhoneCompany],
        mailCompany: [this.eventosService.company.mailCompany],
        numberVerification: [this.eventosService.company.numberVerification],
        responsableCompany: [this.eventosService.company.responsableCompany],
        nameCompany: [this.eventosService.company.nameCompany],
        NIT: [this.eventosService.company.NIT],


      });
      return
    }

    this.formulario = this.formBuilder.group({
      typeDocument: [this.eventosService.typeDoc, Validators.required],

      namePerson: [this.eventosService.person.namePerson],
      landlinePerson: [this.eventosService.person.landlinePerson],
      mobilePhonePerson: [this.eventosService.person.mobilePhonePerson],
      mailPerson: [this.eventosService.person.mailPerson],
      cedula: [this.eventosService.person.cedula],
      responsablePerson: [this.eventosService.person.responsablePerson],

    });

  }


  validacionesDatosRequeridosPorTipoDocumeto(): number {
    return this.formulario.get('typeDocument').value;
  }
  isPerson() {
    return this.validacionesDatosRequeridosPorTipoDocumeto() != DOCUMENT_TYPE_ENUM.NIT ? true : false;
  }
  isCompany() {
    return this.validacionesDatosRequeridosPorTipoDocumeto() == DOCUMENT_TYPE_ENUM.NIT ? true : false;
  }

  changeSelectTypeDocument(event) {
    alert(event)
  }

}
