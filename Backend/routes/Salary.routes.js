const express = require("express")
const { AttendenceModel } = require("../model/Attendance.model")
const { DepartmentModel } = require("../model/Department.model")
const { EmployeeModel } = require("../model/Employee.model")
const { PositionModel } = require("../model/Position.model")
const { SalaryModel } = require("../model/Salary.model")
const salaryRouter = express.Router()


salaryRouter.post("/", async (req, res) => {
    const { position_id, basic_salary, hra, da, other_allowances, gross_salary } = req.body
    try {
        const data = await SalaryModel(position_id, basic_salary, hra, da, other_allowances, gross_salary)
        await data.save()
        res.send("added")
    } catch (err) {
        res.send("err")
    }
})

salaryRouter.get("/:id", async (req, res) => {

    try {
        const data = await SalaryModel.findById(req.params._id)
        res.send(data)
    } catch (err) {
        res.send("err")
    }
})

salaryRouter.get("/", async (req, res) => {

    try {
        const data = await SalaryModel.find()
        res.send(data)
    } catch (err) {
        res.send("err")
    }
})
salaryRouter.patch("/:id", async (req, res) => {
    console.log(req.params._id)
    const { position_id, basic_salary, hra, da, other_allowances, gross_salary } = req.body;
    try {
        const updateSalary = await SalaryModel.findByIdAndUpdate(req.params._id, { position_id, basic_salary, hra, da, other_allowances, gross_salary, updated_at: Date.now() })
        res.send(updateSalary)
    } catch (err) {
        res.send(err)
    }

})

salaryRouter.delete("/:id", async (req, res) => {
    console.log(req.params._id)
    try {
        const deleteSalary = await SalaryModel.findByIdAndDelete(req.params._id)
        res.send(deleteSalary)
    } catch (err) {
        res.send(err)
    }

})

salaryRouter.get("/salary", async (req, res) => {
    // console.log(req.params._id)
    try {
        const { employeeId, month, year } = req.body
        const employee = await EmployeeModel.findById(employeeId);
        const position = await PositionModel.findById(employee.position_id);
        const department = await DepartmentModel.findById(employee.department_id)
        const salary = await SalaryModel.findOne({ position_id: employee.position_id })


        const basic_salary = salary.basic_salary
        const hra = salary.hra;
        const da = salary.da;
        const otherAllowances = salary.other_allowances;

        
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
      const salaryTotal =  basicSalary + hra + da + otherAllowances
      const totalAfterWorkingHrs = salaryTotal * totalWorkedHours / 234 
      res.send({ employeeId, month, year, totalAfterWorkingHrs })
    } catch (err) {
        res.send(err)
    }

})
module.exports = {
    salaryRouter
}