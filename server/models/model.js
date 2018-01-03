const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    model_Name: String,
    model_Description: String,
    brandId: {
        type: Schema.Types.ObjectId,
        ref: 'brand'
    },
    equipmentId: {
        type: Schema.Types.ObjectId,
        ref: 'equipment'
    }

})

const Model = mongoose.model('model',modelSchema);

module.exports = Model;