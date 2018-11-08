import { ImageModel } from "./image-model";
import { ExperienceModel } from "./experience-model";
import { LoungeModel } from "./lounge-model";
import { HeadquearterImagesModel } from "./headquarter-images-model";

export class HeadquarteModel {
    id: number
    name: string
    description: string
    experences: ExperienceModel[]
    images: HeadquearterImagesModel[]
    lounges: LoungeModel[]
    loungesQueryParams: string
    constructor() {
        this.images = []
    }
}
