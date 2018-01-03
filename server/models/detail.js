const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    cover : {type:Boolean,default:false},
    battery: {type:Boolean,default:false},
    filter: {type:Boolean,default:false},
    fcap: {type:Boolean,default:false},
    rcap: {type:Boolean,default:false},
    bcap: {type:Boolean,default:false},
    strap: {type:Boolean,default:false},
    card: {type:Boolean,default:false},
    eyePiece: {type:Boolean,default:false},
    hood: {type:Boolean,default:false},

})

const Detail = mongoose.model('detail',detailSchema);

module.exports = Detail;