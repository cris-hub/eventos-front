import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BreadcrumbsService } from 'ng6-breadcrumbs';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-main-content',
  templateUrl: `./main-content.component.html`,

  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  

  constructor(
    private location : Location,
    public headerService : HeaderService
  ) { }

  goBack(){
 
    this.location.back()
  }
  ngOnInit() {



  }

}
