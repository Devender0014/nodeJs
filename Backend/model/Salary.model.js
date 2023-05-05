const mongoose = require("mongoose")

const salarySchema = mongoose.Schema({
    userId: String,
    position_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Position',
        required: true
      },
      basic_salary: {
        type: Number,
        required: true
      },
      hra: {
        type: Number,
        required: true
      },
      da: {
        type: Number,
        required: true
      },
      other_allowances: {
        type: Number,
        required: true
      },
      gross_salary: {
        type: Number,
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

const SalaryModel = mongoose.model("salary",salarySchema)

module.exports={
    SalaryModel
}

