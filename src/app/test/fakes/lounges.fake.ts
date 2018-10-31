import { LoungeModel } from "../../model/lounge-model";
import { HEADQUEARTERFAKE } from "./headquarter.fake";
export const LOUNGEFAKE = <LoungeModel[]>[

    {
        id: 1,
        headquarterId: HEADQUEARTERFAKE[0].id,
        headquarter: HEADQUEARTERFAKE[0],
        capacity: 20,
        name: 'La faraona',
        description: 'numero 1',
        images: [
            {
                imagen: {
                    alt: 'sedes colsubsidio',
                    src: '../../../assets/images/club_1.jpeg'

                }
            }
        ]
    },
]