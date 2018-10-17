import { ImageModel } from "./image-model";
import { HeadquarteModel } from "./headquarte-model";

export class LoungeModel {
    id: number
    name: string
    images: ImageModel[]
    capacity : number
    description: string
    headquarterId: number
    headquarter: HeadquarteModel

}

