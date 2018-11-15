import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { LoungeModel } from '../../model/lounge-model';
import { Router, ActivatedRoute } from '@angular/router';
import { ExperienceModel } from '../../model/experience-model';
import { EventosService } from '../../services/eventos.service';

@Component({
    selector: 'app-lounge-tab-info',
    templateUrl: './lounge-tab-info.component.html',
    styleUrls: ['./lounge-tab-info.component.css']
})
export class LoungeTabInfoComponent implements OnInit {

    @Input() lounge: LoungeModel = new LoungeModel();
    @Input() params: any;
    public galleryOptions: NgxGalleryOptions[] = [];
    public galleryImages: NgxGalleryImage[] = [];
    private experiencia: ExperienceModel = new ExperienceModel()

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private eventosService: EventosService
    ) { }

    ngOnInit() {
        this.obtenerParamtrosRuta();
        this.setGallery();
    }

    /**
     * function para armar la galeria de imagenes del hotel
     */

    obtenerParamtrosRuta() {
        this.experiencia.id = parseInt(this.activeRoute.snapshot.paramMap.get('experiencia'))
    }
    reservar(lounge: LoungeModel) {
        console.log(this.lounge)
        let tempLouge: LoungeModel = new LoungeModel();
        Object.assign(tempLouge, lounge)
        Object.assign(this.eventosService.reservation.lounge, tempLouge)
        console.log('experiencia/' + this.experiencia.id + '/sede/' + this.eventosService.reservation.headquarte.id + '/' + this.lounge.id);
        this.router.navigate([`/experiencia/${this.experiencia.id}/sede/${ this.eventosService.reservation.headquarte.id}/${this.lounge.id}/reserva`])
    }

    clearSeleccion() {
        this.eventosService.reservation.lounge = new LoungeModel()

    }
    setGallery() {
        this.galleryOptions =[
            { "previewCloseOnClick": true, "previewCloseOnEsc": true },
            { "breakpoint": 500, "width": "100%", "height": "300px", "thumbnailsColumns": 3 },
            { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
            ]
            

        var arrGallery = [];
        if (!this.lounge) {
            return
        }
        if(this.lounge.images) {
            if (this.lounge.images.length > 0) {
                this.lounge.images.forEach(function (value) {
                    let json = {
                        "small": value.imagen.src,
                        "medium": value.imagen.src,
                        "big": value.imagen.src
                    };
                    arrGallery.push(json);
                    console.log(arrGallery)
                });
                this.galleryImages = arrGallery ? arrGallery : [];
            }
        }else {
            this.galleryImages = []
        }
       

    }


}
