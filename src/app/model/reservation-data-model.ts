import { ExperienceModel } from "./experience-model";
import { HeadquarteModel } from "./headquarte-model";
import { LoungeModel } from "./lounge-model";
import { CompanyModel } from "./company-model";

export class ReservationDataModel {
    hasBreakfast: Boolean
    hasLunch: Boolean
    hasRefreshmentAM: Boolean
    hasRefreshmentPM: Boolean
    hasDinner: Boolean
    hasIllumination: Boolean
    hasProfessionalSound: Boolean
    hasPallet: Boolean
    hasTent: Boolean
    hasDedicatedChannel: Boolean
    hasSpeaker: Boolean
    hasArtPresentations: Boolean
    hasTransport: Boolean
    hasOthers: Boolean
    others: string
    experience: ExperienceModel
    headquarte: HeadquarteModel
    lounge: LoungeModel
    company: CompanyModel
    nameEvent: string
    constructor() {
        this.company = new CompanyModel()
        this.lounge = new LoungeModel()
        this.headquarte = new HeadquarteModel()
        this.experience = new ExperienceModel()
    }
}
