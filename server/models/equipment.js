const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
    equipmentName: String,
    equipmentDescription: String

})

const Equipment = mongoose.model('equipment',equipmentSchema);

module.exports = Equipment;