const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    
const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    photo:{
        type: String,
    },
})
module.exports = Players = mongoose.model('players', PlayerSchema)