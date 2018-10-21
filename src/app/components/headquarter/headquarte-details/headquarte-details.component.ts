import { Component, OnInit, Input } from '@angular/core';
import { HeadquarteModel } from '../../../model/headquarte-model';
import { LoungeModel } from '../../../model/lounge-model';
import { LOUNGEFAKE } from '../../../test/fakes/lounges.fake';

@Component({
  selector: '[AppHeadquarteHetails]',
  templateUrl: `./headquarte-details.component.html`,
  styleUrls: ['headquarte-details.component.css']
})
export class HeadquarteDetailsComponent implements OnInit {
  @Input() public headquarter: HeadquarteModel = new HeadquarteModel();
  public lounge: LoungeModel[] = LOUNGEFAKE
  constructor() { }

  ngOnInit() {

    this.lounge = LOUNGEFAKE;
  }

}
