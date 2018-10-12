import { Component, OnInit, Input } from '@angular/core';
import { ExperienceModel } from '../../../model/experience-model';
import { ImageModel } from '../../../model/image-model';

@Component({
  selector: 'app-experiences-details',
  templateUrl: `./experiences-details.component.html`,
  styleUrls: ['./experiences-details.component.css'],

})
export class ExperiencesDetailsComponent implements OnInit {

   @Input() public experience: ExperienceModel = new ExperienceModel();
  constructor() { }

  ngOnInit() {
    
  }

}
