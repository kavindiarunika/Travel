import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import productrouter from './router/PackageRoute.js'
import connectDB from './config/mongodb.js';

//db name=kavindiarunika26 password =kavindiarunika26
const app = express();
const port =process.env.PORT || 4000;
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/package',productrouter)

app.get('/' , (req,res) =>{
    res.send("APi working")
})

app.listen(port,()=>{
    console .log("server starting")
})