import express from 'express';
// const dotenv = require('dotenv').config();
import { json,urlencoded } from 'express';
import drRoutes from './routes/doctorRoutes.mjs'

import connectDb from './config/db.mjs'
connectDb();

const app = express();
import cors from 'cors'
app.use(cors());

app.use(json()); 
app.use(urlencoded({extended:false}));

app.use('/api/doctor',drRoutes);

app.listen(5000, () => console.log(`server started at port 5000`))