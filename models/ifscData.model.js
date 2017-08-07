var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ifscSchema = new Schema({
        BANK: String,
        IFSC: String,
        MICR_CODE: Number,
        BRANCH: String,
        ADDRESS: String,
        CONTACT: Number,
        CITY: String,
        DISTRICT:  String,
        STATE: String
},
{
    collection : 'ifscData'
});

module.exports = mongoose.model('ifscData', ifscSchema);
