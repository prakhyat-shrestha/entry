export interface Repair{
    _id:string;
    billNo:number;
    dateReceived:Date;
    dateReturned:Date;
    serialNo:string;
    problem: string;
    estimatedPrice:number;
    chargedPrice:number;
    note:string;
    description:string;
    detailId: string;
    customerId:string;
    stateId:string;
    brandId:string;
    equipmentId:string;
    modelId:string;
    employeeId:string;
}