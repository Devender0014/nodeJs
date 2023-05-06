const express = require("express")
const { EmployeeModel } = require("../model/Employee.model")
const employeeRouter = express.Router()
const { PositionModel } = require("../model/Position.model")


employeeRouter.post('/', async (req, res) => {
  const { name, email, phone_number, address, department_id, position_id } = req.body;
  try {
    const department = await EmployeeModel.findById(department_id);
    if (!department) {
      return res.status(400).json({ message: 'Invalid department id' });
    }
    const position = await PositionModel.findById(position_id);
    if (!position) {
      return res.status(400).json({ message: 'Invalid position id' });
    }
    const employee = new EmployeeModel({
      name,
      email,
      phone_number,
      address,
      department: department._id,
      position: position._id
    });
    const newEmployee = await employee.save();
    res.send(newEmployee);
  } catch (err) {
    res.send({ message: err.message });
  }
});

employeeRouter.get("/", async (req, res) => {
  try {
    const employee = await EmployeeModel.find();
    res.json(employee);
  } catch (error) {
    res.send("err");
  }
})

employeeRouter.get("/:_id", async (req, res) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    res.send(employee)
  } catch (err) {
    res.send(err)
  }
})

employeeRouter.patch("/:_id", async (req, res) => {
  try {
    const updateEmployee = await EmployeeModel.findByIdAndUpdate(rew.params.id, {
      department_id, position_id, name, email, phone_number, address, updated_at: Date.now()
    })
  }catch(err){
    res.send(err)
  }

})

employeeRouter.delete("/:id", async (req, res) => {
  console.log(req.params._id)
  try{
    const deleteEmployee = await EmployeeModel.findByIdAndDelete(req.params._id)
    res.send(deleteEmployee)
  }catch(err){
    res.send(err)
  }

})



module.exports = {
  employeeRouter
}