import { Component, OnInit, Input } from '@angular/core';
import { HeadquarteModel } from '../../../model/headquarte-model';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { EventosService } from '../../../services/eventos.service';
import { ImageModel } from '../../../model/image-model';

@Component({
  selector: '[AppHeadquarteHetails]',
  templateUrl: `./headquarte-details.component.html`,
  styleUrls: ['headquarte-details.component.css']
})
export class HeadquarteDetailsComponent implements OnInit {
  @Input() public headquarter: HeadquarteModel = new HeadquarteModel();
  public lounges: LoungeModel[] = []
  public images: ImageModel[]
  constructor(
    public eventosService: EventosService
  ) { }

  ngOnInit() {
    this.images = this.headquarter.images.map(c => c.imagen)
  }


  searchLounges(headquarterId: number) {
    this.eventosService.getlistloungebyheadquarteridandloungecapacity(headquarterId, this.eventosService.headquearterFilter.capacity).subscribe(response => {
      this.lounges = response
    })
  }
  selectLounge(lounge: LoungeModel) {
    console.log(this.lounges)
    let tempLouge: LoungeModel = new LoungeModel();
    Object.assign(tempLouge, lounge)
    Object.assign(this.eventosService.reservation.lounge, tempLouge)
  }
}
