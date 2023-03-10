const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddr: String,
    phoneNumber: String,
    dob: String,
})

const paymentModel = mongoose.model('Payments', paymentSchema);

module.exports = paymentModel;