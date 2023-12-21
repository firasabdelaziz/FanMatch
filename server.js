import express from "express"
import mongoose from "mongoose"
import morgan from "morgan"
import cors from "cors"
import fanroute from "./Routes/Fan.rout.js"
import matchroute from "./Routes/Match.rout.js"

const app = express()

const hostname=process.env.serverAdresse || "127.0.0.1"
const port= process.env.port || 9090 

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/Fan",fanroute)
app.use("/match",matchroute)

const dabasename = "testexamn2info"
mongoose.connect(`mongodb+srv://firas:****@cluster0.ny7bofu.mongodb.net/${dabasename}`)
.then(()=>{
    console.log(`connected to ${dabasename}`);
})
.catch(err=>{ 
    console.log(err)
})

app.listen(port,hostname ,()=>{
    console.log(`server running ${hostname}:${port}`)
})

 