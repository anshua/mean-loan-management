const mongoose = require('mongoose');

const auditSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddr: String,
    phoneNumber: String,
    dob: String,
})

const auditModel = mongoose.model('Audits', auditSchema);

module.exports = auditModel;