const express= require("express")
const {AttendenceModel} = require("../model/Attendance.model")
const attendenceRouter = express.Router()


attendenceRouter.post("/",async(req,res)=>{
    const payload = req.body
    console.log(payload)
    try{
        const data = await AttendenceModel(payload)
        await data.save()
        res.send("added")
    }catch(err){
        res.send(err)
    }
})

attendenceRouter.get("/:id", async (req, res) => {
  console.log(req.params._id)
    try {
      const attendance = await AttendenceModel.findById(req.params._id);
      res.send(attendance)
    } catch (error) {
      res.send(error);
    }
  })
  attendenceRouter.get('/', async (req, res) => {
    try {
      const attendances = await AttendenceModel.find();
      res.json(attendances);
    } catch (error) {
      res.send("err");
    }
  });

  attendenceRouter.patch("/:id", async (req, res) => {
    console.log(req.params._id)
    const {in_time,out_time} = req.body
    try{
      const updateattendence = await AttendenceModel.findByIdAndUpdate(req.params._id,{in_time,out_time,updated_at:Date.now()})
      res.send(updateattendence)
    }catch(err){
      res.send(err)
    }

  })
  attendenceRouter.delete("/:id", async (req, res) => {
    console.log(req.params._id)
    try{
      const deleteattendence = await AttendenceModel.findByIdAndDelete(req.params._id)
      res.send(deleteattendence)
    }catch(err){
      res.send(err)
    }

  })

  attendenceRouter.get("/employee", async (req, res) => {
    
    try{
      const { employeeId, month, year } = req.body;
      const attendanceRecords = await AttendenceModel.find({
        employee_id: employeeId,
        month: month,
        year: year
      });
      res.send(attendanceRecords)
    }catch(err){
      res.send(err)
    }

  })
  attendenceRouter.get("/employee/work-hours", async (req, res) => {
    
    try{
      const { employeeId, month, year } = req.body;
      const attendanceRecords = await AttendenceModel.find({
        employee_id: employeeId,
        month: month,
        year: year
      })
      let totalWorkedHours = 0;
    attendanceRecords.forEach((record) => {
      const inTime = new Date(record.in_time);
      const outTime = new Date(record.out_time);
      const duration = outTime - inTime;
      totalWorkedHours += duration / (1000 * 60 * 60)
    });
      res.send({employeeId,month,year,totalWorkedHours})
    }catch(err){
      res.send(err)
    }

  })


module.exports={
    attendenceRouter
}