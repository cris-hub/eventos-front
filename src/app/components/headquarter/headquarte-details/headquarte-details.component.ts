import { Component, OnInit, Input } from '@angular/core';
import { HeadquarteModel } from '../../../model/headquarte-model';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: '[AppHeadquarteHetails]',
  templateUrl: `./headquarte-details.component.html`,
  styleUrls: ['headquarte-details.component.css']
})
export class HeadquarteDetailsComponent implements OnInit {
  @Input() public headquarter: HeadquarteModel = new HeadquarteModel();
  public lounge: LoungeModel[] = LOUNGEFAKE
  constructor(
    public eventosService : EventosService
  ) { }

  ngOnInit() {

    this.lounge = LOUNGEFAKE;
  }
  selectLounge(lounge : LoungeModel){
      console.log(this.lounge)
      let tempLouge: LoungeModel = new LoungeModel();
      Object.assign(tempLouge, lounge)
      delete tempLouge.images
      Object.assign(this.eventosService.reservation.lounge, tempLouge)
  }
}
