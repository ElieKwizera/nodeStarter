import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './conf/db';


const app = express();

dotenv.config();
connectDB();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors())
app.use(morgan('common'));


const port  = process.env.PORT || 5000;

app.listen(port,()=>
{
    console.log(`Server runnin on port ${port}`);
});



