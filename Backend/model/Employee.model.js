const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      phone_number: {
        type: String,
        required: true,
        unique: true
      },
      address: {
        type: String,
        required: true
      },
      department_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
      },
      position_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Position',
        required: true
      },
      salary_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Salary',
        required: true
      },
      attendance_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attendance',
        required: true
      },
      created_at: {
        type: Date,
        default: Date.now
      },
      updated_at: {
        type: Date,
        default: Date.now
      }
})

const EmployeeModel = mongoose.model("employee",employeeSchema)

module.exports={
    EmployeeModel
}
