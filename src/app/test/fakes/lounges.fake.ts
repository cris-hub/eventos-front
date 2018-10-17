import { LoungeModel } from "../../model/lounge-model";
import { HEADQUEARTERFAKE } from "./headquarter.fake";
export const LOUNGEFAKE = <LoungeModel[]>[

    {
        id: 1,
        headquarterId:  HEADQUEARTERFAKE[0].id,
        headquarter : HEADQUEARTERFAKE[0],
        capacity : 20,
        name: 'La faraona',
        description: 'numero 1',
        images: [
            {
                alt: 'sedes colsubsidio',
                src: '../../../assets/images/club_1.jpeg'
            }
        ]
    },
    {
        id: 2,
        headquarterId:  HEADQUEARTERFAKE[1].id,
        headquarter : HEADQUEARTERFAKE[1],
        capacity : 10,
        name: 'La faraona',
        description: 'numero 2',

        images: [
            {
                alt: 'sedes colsubsidio',
                src: '../../../assets/images/club_1.jpeg'
            }
        ]
    },
    {
        id: 3,
        headquarterId:  HEADQUEARTERFAKE[2].id,
        headquarter : HEADQUEARTERFAKE[2],
        capacity : 30,
        name: 'La faraona',
        description: 'numero 2',

        images: [
            {
                alt: 'sedes colsubsidio',
                src: '../../../assets/images/club_1.jpeg'
            }
        ]
    },
    {
        id: 4,
        headquarterId:  HEADQUEARTERFAKE[3].id,
        headquarter : HEADQUEARTERFAKE[3],
        capacity : 40,
        name: 'La faraona',
        description: 'numero 2',

        images: [
            {
                alt: 'sedes colsubsidio',
                src: '../../../assets/images/club_1.jpeg'
            }
        ]
    },
]