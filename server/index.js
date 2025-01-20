import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express();
// must add to use env
import dotenv from 'dotenv'
dotenv.config({});
// call database here
import connectDB from './database/db.js';
import userRoute from './routes/user.route.js'

connectDB();

const PORT = process.env.PORT;

// default middle ware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
     origin:"http://localhost:5173",
     credentials:true
}));

// apis  // app.use = middleware
app.use("/api/v1/user", userRoute)    // end-point

app.listen(PORT, ()=>{
     console.log(`server is listening at port ${PORT}`);
     
})