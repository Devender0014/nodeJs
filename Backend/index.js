const express = require("express")
const {connection} = require('./db')
const { attendenceRouter } = require("./routes/Attencence.routes")
const { departmentRouter } = require("./routes/Department.routes")
const { employeeRouter } = require("./routes/Employee.routes")
const { positionRouter } = require("./routes/Position.routes")
const { salaryRouter } = require("./routes/Salary.routes")

const app = express()
app.use(express.json())



app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/attendence",attendenceRouter)
app.use("/department",departmentRouter)
app.use("/employee",employeeRouter)
app.use("/position",positionRouter)
app.use("/salary",salaryRouter)


app.listen(2500,async ()=>{
    try{
        await connection
        console.log("server")
    }catch(err){
        console.log(err)
    }
    
    console.log("server is running on 2500")
})