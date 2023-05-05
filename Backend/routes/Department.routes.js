const express= require("express")
const {DepartmentModel} = require("../model/Department.model")
const departmentRouter = express.Router()


departmentRouter.post("/",async(req,res)=>{
    const payload = req.query
    try{
        const data = await DepartmentModel(payload)
        await data.save()
        res.send("added")
    }catch(err){
        res.send("err")
    }
})

departmentRouter.post('/', async (req, res) => {
    const department = new DepartmentModel({
      name: req.body.name
    });
  
    try {
      const newDepartment = await department.save();
      res.status(201).json(newDepartment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

module.exports={
    departmentRouter
}