import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Mongo connected')
    }catch(error){
        console.error(error.message)
        process.exit(1)
    }
}

export default connectDB