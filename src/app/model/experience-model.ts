import { ImageModel } from "./image-model";
import { EventTypeModel } from "./event-type-model";

export class ExperienceModel {
  id : number
  imagen:ImageModel;
  name: string;
  description: string;
  
  eventTypeId:number
  eventType:EventTypeModel
  constructor() {

  }
}
