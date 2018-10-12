import { Component, OnInit, Input } from '@angular/core';
import { HeadquarteModel } from '../../../model/headquarte-model';

@Component({
  selector: 'app-headquarte-details',
  templateUrl: `./headquarte-details.component.html`,
  styleUrls: ['headquarte-details.component.css']
})
export class HeadquarteDetailsComponent implements OnInit {
  @Input() public headquarter: HeadquarteModel = new HeadquarteModel();

  constructor() { }

  ngOnInit() {
  }

}
