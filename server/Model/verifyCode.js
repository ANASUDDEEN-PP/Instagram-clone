const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const verifySchema = new Schema({
    verifyCode : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('VerifyCode', verifySchema);