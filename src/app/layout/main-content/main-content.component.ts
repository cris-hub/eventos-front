import { Component, OnInit } from '@angular/core';
import { Location } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-main-content',
  templateUrl: `./main-content.component.html`,

  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  goBack(){
    this.location.back()
  }
  ngOnInit() {
  }

}
