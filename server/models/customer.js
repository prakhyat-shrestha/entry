const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: String,
    company: String,
    phone: String,
    mobile: String,
    email: String,
    address: String,
    city: String,
    repairs: [{
        type: Schema.Types.ObjectId,
        ref: 'repair'
    }]
})

const Customer = mongoose.model('customer',customerSchema);

module.exports = Customer;