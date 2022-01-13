import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';

import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import postRoute from './routes/post.js'
import connectDB from './config/db.js';

dotenv.config()

connectDB()


const app = express()
const __dirname = path.resolve()

app.use("/images", express.static(path.join(__dirname, "public/images")))
//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("dev"))

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        // console.log(req)
        cb(null, req.body.name)
    },
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'),  (req, res) => {
    try{    
        return res.status(200).json("File uploaded successfully!")
    }catch(err){
        console.error(err)
    }
})

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running...${port}`)
})