import express from 'express';
import mongoose from 'mongoose'
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import postRoute from './routes/post.js'
import connectDB from './config/db.js';

dotenv.config()

connectDB()

const app = express()

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("dev"))

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)

app.listen(8080, () => {
    console.log('Server is running...')
})