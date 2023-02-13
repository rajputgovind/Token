import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import adminRouter from './src/routers/Admin1Router.js';
const app = express();
app.use(express.json())
app.use(adminRouter)
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log('connection successful...')

})
.catch(()=>{
    console.log('error in connecting.....')
})

app.listen(process.env.SERVER_PORT,()=>{
    console.log('server is listning on port', process.env.SERVER_PORT)
})