const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const peakSchema = new Schema({
    peak: { type: String, required: true },
    bagged: { type: Boolean, default: false, required: true },
    date: { type: Date, default: Date.now, required: true},
    start: { type: String, required: true },
    summited: { type: String, required: false},
    end: { type: String, required: true},
    drink: { type: Number, required: false},
    image: { data: Buffer, contentType: String, required: false},
    notes: { type: String, required: false },
    
    });
    
module.exports = mongoose.model('peak', peakSchema)