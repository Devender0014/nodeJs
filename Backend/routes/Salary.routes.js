const express= require("express")
const {SalaryModel} = require("../model/Salary.model")
const salaryRouter = express.Router()


salaryRouter.post("/",async(req,res)=>{
    const payload = req.query
    try{
        const data = await SalaryModel(payload)
        await data.save()
        res.send("added")
    }catch(err){
        res.send("err")
    }
})

module.exports={
    salaryRouter
}