const mongoose = require("mongoose")

const attendenceSchema = mongoose.Schema({
    userId: String,
    employee_id : String,
    in_time: { type: Date, required: true },
  out_time: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

const AttendenceModel = mongoose.model("attendence",attendenceSchema)

module.exports={
    AttendenceModel
}

