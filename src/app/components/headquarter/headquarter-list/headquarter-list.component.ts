import { Component, OnInit } from '@angular/core';
import { HeadquarteModel } from '../../../model/headquarte-model';
import { EventosService } from '../../../services/eventos.service';

@Component({
  selector: 'app-headquarter-list',
  templateUrl: './headquarter-list.component.html',
  styleUrls: ['./headquarter-list.component.css']
})
export class HeadquarterListComponent implements OnInit {
  public headquarters: HeadquarteModel[] = []
  constructor(
    private eventosService: EventosService
  ) { }

  ngOnInit() {
    this.getHeadquarterByExperence();
  }

  getHeadquarterByExperence() {
    this.eventosService.getHeadquarterByExperence().subscribe(response => {
      console.log(response)
      Object.assign(this.headquarters, response);
    });
  }

}
