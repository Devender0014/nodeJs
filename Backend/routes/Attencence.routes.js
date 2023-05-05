const express= require("express")
const {AttendenceModel} = require("../model/Attendance.model")
const attendenceRouter = express.Router()


attendenceRouter.post("/",async(req,res)=>{
    const payload = req.query
    try{
        const data = await AttendenceModel(payload)
        await data.save()
        res.send("added")
    }catch(err){
        res.send("err")
    }
})

attendenceRouter.get("/:id", async (req, res) => {
    try {
      const attendance = await AttendenceModel.findById(req.params.id);
      if (attendance) {
        res.json(attendance);
      } else {
        res.status(404).json({ message: 'Attendance record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
  attendenceRouter.get('/', async (req, res) => {
    try {
      const attendances = await AttendenceModel.find();
      res.json(attendances);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports={
    attendenceRouter
}