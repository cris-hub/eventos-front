import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BreadcrumbsService } from 'ng6-breadcrumbs';

@Component({
  selector: 'app-main-content',
  templateUrl: `./main-content.component.html`,

  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(
    private location : Location,
  ) { }

  goBack(){
 
    this.location.back()
  }
  ngOnInit() {

  }

}
