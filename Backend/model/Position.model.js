const mongoose = require("mongoose")

const positionSchema = mongoose.Schema({
    userId: String,
    name: { type: String, required: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }

})

const PositionModel = mongoose.model("position",positionSchema)

module.exports={
    PositionModel
}