const express= require("express")
const {EmployeeModel} = require("../model/Employee.model")
const employeeRouter = express.Router()
const {PositionModel} = require("../model/Position.model")


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
    const employee = new Employee({
      name,
      email,
      phone_number,
      address,
      department: department._id,
      position: position._id
    });
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports={
    employeeRouter
}