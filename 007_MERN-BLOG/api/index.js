import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("MongoDb is connected")
}).catch((err) => {
    console.log(err)
})

const app = express()

app.listen(3000, ()=>{
    console.log(`server is runnig on port 3000`)
})

// app.get('/', (req, res) => {
//     res.json({message: "Api is working"})
// })

app.use('/api/user', userRoute)