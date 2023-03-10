const mongoose = require('mongoose');

const settingSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddr: String,
    phoneNumber: String,
    dob: String,
})

const settingModel = mongoose.model('Settings', settingSchema);

module.exports = settingModel;