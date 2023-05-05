const express= require("express")
const {PositionModel} = require("../model/Position.model")
const positionRouter = express.Router()


positionRouter.post('/', async (req, res) => {
    const position = new Position({
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

module.exports={
    positionRouter
}