import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { LoungeModel } from '../../model/lounge-model';
import { Router, ActivatedRoute } from '@angular/router';
import { ExperienceModel } from '../../model/experience-model';

@Component({
    selector: 'app-lounge-tab-info',
    templateUrl: './lounge-tab-info.component.html',
    styleUrls: ['./lounge-tab-info.component.css']
})
export class LoungeTabInfoComponent implements OnInit {

    @Input() lounge: LoungeModel = new LoungeModel();
    @Input() params: any;
    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];
    private experiencia: ExperienceModel = new ExperienceModel()

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
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
    reservar() {
        console.log(this.lounge)
        console.log('experiencia/' + this.experiencia.id + '/sede/' + this.lounge.headquarterId + '/' + this.lounge.id);
        this.router.navigate([`/experiencia/${this.experiencia.id}/sede/${this.lounge.headquarterId}/${this.lounge.id}/reserva`])
    }
    setGallery() {
        this.galleryOptions = [
            { "image": false, "thumbnailsRemainingCount": true, "height": "190px", "width": "100%" },
            { "breakpoint": 500, "width": "100%", "thumbnailsColumns": 2 }
        ];

        var arrGallery = [];
        if (!this.lounge) {
            return
        }
        if (this.lounge.images.length > 0) {
            this.lounge.images.forEach(function (value) {
                let json = {
                    "small": value.src,
                    "medium": value.src,
                    "big": value.src
                };
                arrGallery.push(json);
                console.log(arrGallery)
            });
            this.galleryImages = arrGallery;
        }

    }


}
