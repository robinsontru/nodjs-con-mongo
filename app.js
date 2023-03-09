require("dotenv").config()


const express = require ("express")
const cors = require ("cors")
const app = express()
const dbConnect = require ('./config/mongo.js')

 app.use(cors())

 const port = process.env.PORT || 4000 
 app.listen(port,()=>{
 console.log(`el servidor esta corriendo en el http://localhost:${port}`)
})
  dbConnect() 