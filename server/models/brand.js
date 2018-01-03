const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    brandName: String,
    brandDescription: String

})

const Brand = mongoose.model('brand',brandSchema);

module.exports = Brand;