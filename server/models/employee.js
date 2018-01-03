const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employeeName: String,
    employeeMobile: String

})

const Employee = mongoose.model('employee',employeeSchema);

module.exports = Employee;