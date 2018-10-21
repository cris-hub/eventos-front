import { ImageModel } from "./image-model";
import { ExperienceModel } from "./experience-model";
import { LoungeModel } from "./lounge-model";

export class HeadquarteModel {
    id: number
    name: string
    description: string
    experences : ExperienceModel[]
    images: ImageModel[]
    lounges : LoungeModel[]
    loungesQueryParams : string
    constructor() {

    }
}
