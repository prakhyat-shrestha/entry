const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repairSchema = new Schema({
    billNo: Number,
    problem: String,
    dateReceived: Date,
    dateReturned:Date,
    serialNo:String,
    estimatedPrice: Number,
    chargedPrice: Number,
    note:String,
    description: String,
    detailId: {
        type: Schema.Types.ObjectId,
        ref:'detail'
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'customer'
    },
    stateId: {
        type:Schema.Types.ObjectId,
        ref: 'state'
    },
    brandId: {
        type:Schema.Types.ObjectId,
        ref: 'brand'
    },
    equipmentId: {
        type:Schema.Types.ObjectId,
        ref: 'equipment'
    },
    modelId: {
        type:Schema.Types.ObjectId,
        ref: 'model'
    },
    employeeId: {
        type:Schema.Types.ObjectId,
        ref: 'employee'
    }


})

const Repair = mongoose.model('repair',repairSchema);

module.exports = Repair;