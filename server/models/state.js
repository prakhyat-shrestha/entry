const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    stateName: String,
    stateDescription: String

})

const State = mongoose.model('state',stateSchema);

module.exports = State;