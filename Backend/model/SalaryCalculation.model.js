const mongoose = require("mongoose")

const salarycalculationSchema = mongoose.Schema({
    id: String,
    employee_id : String,
    calculation_date: { type: Date, default: Date.now },
    status: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

const SalarycalculationModel = mongoose.model("salarycalculation",salarycalculationSchema)

module.exports={
    SalarycalculationModel
}

