import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit : "32mb", extended:true}));
app.use(bodyParser.urlencoded  ({limit : "32mb", extended:true}));
app.use(cors());

const MONGO_URI ="mongodb+srv://instaverse:MongoDb@123@cluster0.feha270.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const PORT = process.env.PORT || 5001;

const connectDB = async () =>{

    try{
       await mongoose.connect(MONGO_URI)
       app.listen(PORT, () => console.log(`Server Running on port:  ${PORT}`));
    }catch(err){
        console.error("Connection to MongoDB failed", err.message);
    }
}

connectDB();

mongoose.connection.on("open",()=>console.log("Connection to database has been established successfully"));

mongoose.connection.on("error",(err)=>console.log("err"));