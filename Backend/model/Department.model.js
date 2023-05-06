const mongoose = require("mongoose")

const departmentSchema = mongoose.Schema({
  userId: String,
  name:  String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const DepartmentModel = mongoose.model("department", departmentSchema)

module.exports = {
  DepartmentModel
}