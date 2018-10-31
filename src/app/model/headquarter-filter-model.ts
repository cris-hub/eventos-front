export class HeadquarterFilterModel {
    public capacity: number
    public amountAttendingEventChildren: number
    public amountAttendingEventAdults: number
    public dateStart : Date
    public dateFinish : Date
    public eventType: number
    public cityId : number
    constructor() {
        this.amountAttendingEventAdults = 0
        this.amountAttendingEventChildren = 0
        this.capacity = this.amountAttendingEventAdults + this.amountAttendingEventChildren

    }

}
