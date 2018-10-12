import { ImageModel } from "./image-model";
import { ExperienceModel } from "./experience-model";

export class HeadquarteModel {
    id: number
    name: string
    description: string
    experences : ExperienceModel[]
    images: ImageModel[]
    constructor() {

    }
}
