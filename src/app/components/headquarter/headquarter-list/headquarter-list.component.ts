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
<<<<<<< HEAD
    this.eventosService.getHeadquarterByExperence(this.eventosService.experience.eventTypeId,1).subscribe(response => {
=======
    this.eventosService.getHeadquarterByExperence().subscribe(response => {
>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c
      console.log(response)
      Object.assign(this.headquarters, response);
    });
  }
<<<<<<< HEAD
  selectHeadquarter(headquarter : HeadquarteModel){
    let tempHeadquarte : HeadquarteModel = new HeadquarteModel();
    Object.assign(tempHeadquarte, headquarter)
    delete tempHeadquarte.images;
    Object.assign(this.eventosService.reservation.headquarte,tempHeadquarte)
    debugger

  }
=======

>>>>>>> df07b74232c2b67ce2f6c69e0ccafe945a638d8c
}
