import { ImageModel } from "./image-model";
import { HeadquarteModel } from "./headquarte-model";
import { LoungeImagesModel } from "./lougen-images-model";

export class LoungeModel {
    id: number
    name: string
    images: LoungeImagesModel[]
    capacity : number
    description: string
    headquarterId: number
    headquarter: HeadquarteModel

}

