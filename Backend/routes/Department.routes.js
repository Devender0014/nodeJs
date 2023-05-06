const express= require("express")
const {DepartmentModel} = require("../model/Department.model")
const departmentRouter = express.Router()


departmentRouter.post("/",async(req,res)=>{
    const payload = req.body
    try{
        const data = await DepartmentModel(payload)
        await data.save()
        res.send("added")
    }catch(err){
        res.send("err")
    }
})

departmentRouter.get('/', async (req, res) => {
  try {
    const department = await DepartmentModel.find();
    res.json(department);
  } catch (error) {
    res.status(500).json("err");
  }
});

departmentRouter.patch("/:id", async (req, res) => {
  console.log(req.params._id)
  const {name} = req.body
  try{
    const updateDepartment = await DepartmentModel.findByIdAndUpdate(req.params._id,{name,updated_at:Date.now()})
    res.send(updateDepartment)
  }catch(err){
    res.send(err)
  }

})
departmentRouter.delete("/:id", async (req, res) => {
  console.log(req.params._id)
  try{
    const deleteDepartment = await DepartmentModel.findByIdAndDelete(req.params._id)
    res.send(deleteDepartment)
  }catch(err){
    res.send(err)
  }

})

module.exports={
    departmentRouter
}