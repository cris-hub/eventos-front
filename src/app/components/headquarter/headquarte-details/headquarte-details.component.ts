import { Component, OnInit, Input } from '@angular/core';
import { HeadquarteModel } from '../../../model/headquarte-model';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { EventosService } from '../../../services/eventos.service';
import { ImageModel } from '../../../model/image-model';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { Router } from '@angular/router';
declare let $: any;
@Component({
    selector: '[AppHeadquarteHetails]',
    templateUrl: `./headquarte-details.component.html`,
    styleUrls: ['headquarte-details.component.css']
})
export class HeadquarteDetailsComponent implements OnInit {
    @Input() public headquarter: HeadquarteModel = new HeadquarteModel();
    public lounges: LoungeModel[] = []
    public loungesSlick: LoungeModel[] = []
    private indexShow = 0;

    @Input() public images: ImageModel[] = []

    public galleryOptions: NgxGalleryOptions[] = [];
    public galleryImages: NgxGalleryImage[] = [];

    constructor(
        public eventosService: EventosService, private router: Router
    ) { }

    ngOnInit() {
        this.images = this.headquarter.images ? this.headquarter.images.map(c => c.imagen) : [];
    }


    searchLounges(headquarterId: number,navigate:string) {
        this.eventosService.getlistloungebyheadquarteridandloungecapacity(headquarterId, this.eventosService.headquearterFilter.capacity).subscribe(response => {
            this.lounges = response ? response : [];
            this.loungesSlick = [];
            if (this.lounges.length > 1) {
                $('html,body').animate({
                    scrollTop: ($("#" + navigate).offset().top - 30)
                }, 'slow');
                this.loungesSlick.push(this.lounges[this.indexShow]);
                this.loungesSlick.unshift(this.lounges[this.indexShow + 1]);
            } else {
                this.loungesSlick = this.lounges;
            }
        })
    }
    selectLounge(lounge: LoungeModel,navigate : string) {
        console.log(this.lounges)
        this.indexShow = 0;
  
        let tempLouge: LoungeModel = new LoungeModel();
        Object.assign(tempLouge, lounge)
        Object.assign(this.eventosService.reservation.lounge, tempLouge)

        
        $('html,body').animate({
            scrollTop: ($("#" + navigate).offset().top + 360)
        }, 'slow');
    }

    addElementHead() {
        let index = Math.abs(this.indexShow + 1) + 1
        if (this.lounges.length > index) {
            this.indexShow += 1;
            let temArray = []
            temArray.push(this.lounges[this.indexShow])
            temArray.unshift(this.lounges[this.indexShow + 1])
            this.loungesSlick = temArray
        }
    }

    addElementQueue() {
        let index = Math.abs(this.indexShow + -1) + 1
        if (this.lounges.length > index && this.indexShow > 0) {
            this.indexShow -= 1;
            let temArray = []
            temArray.push(this.lounges[this.indexShow])
            temArray.unshift(this.lounges[this.indexShow + 1])
            this.loungesSlick = temArray
        }
    }


}
