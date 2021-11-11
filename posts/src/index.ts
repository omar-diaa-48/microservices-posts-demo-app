import mongoose from "mongoose";
import { app } from "./app";

const port = process.env.PORT || 3000
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/microservices-posts'

const start = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log('Connected to mongodb');
    } catch (error) {   
        console.error(error)
    }
    
    app.listen(port, () => {
        console.log('Listening to port: ' + port);  
    })
}

start();