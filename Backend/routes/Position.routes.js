const express= require("express")
const {PositionModel} = require("../model/Position.model")
const positionRouter = express.Router()


positionRouter.post('/', async (req, res) => {
    const position = new PositionModel({
      name: req.body.name,
      department: req.body.department
    });
  
    try {
      const newPosition = await position.save();
      res.status(201).json(newPosition);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  positionRouter.get('/', async (req, res) => {
    try {
      const position = await PositionModel.find();
      res.json(position);
    } catch (error) {
      res.send("err");
    }
  });

  positionRouter.patch('/', async (req, res) => {
    try {
      const updatePosition = await PositionModel.findByIdAndUpdate(req.params.id,{ department_id, name, updated_at: Date.now()});
      res.json(updatePosition);
    } catch (error) {
      res.send("err");
    }
  });

  positionRouter.delete('/', async (req, res) => {
    try {
      const deletePosition = await PositionModel.findByIdAndDelete(req.params.id);
      res.json(deletePosition);
    } catch (error) {
      res.send("err");
    }
  });



module.exports={
    positionRouter
}