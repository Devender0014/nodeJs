const mongoose = require("mongoose")

const attendenceSchema = mongoose.Schema({
  userId: String,
  employee_id: String,
  in_time: String,
  out_time: String,
  created_at: String,
  updated_at: String
})

const AttendenceModel = mongoose.model("attendence", attendenceSchema)

module.exports = {
  AttendenceModel
}

