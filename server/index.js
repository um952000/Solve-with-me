import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

//JSON data parsing
app.use(bodyParser.json({ limit: "30mb", extended: true}));

//URLENCODING data PARSING
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

// mongodb+srv://utkarsh:AS2u7OLqHwBIkxud@cluster0.t42lnem.mongodb.net/?retryWrites=true&w=majority

const CONNECTION_URL = 'mongodb://utkarsh:AS2u7OLqHwBIkxud@ac-j6friwt-shard-00-00.t42lnem.mongodb.net:27017,ac-j6friwt-shard-00-01.t42lnem.mongodb.net:27017,ac-j6friwt-shard-00-02.t42lnem.mongodb.net:27017/?ssl=true&replicaSet=atlas-e5lumq-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// connection creation and creating new database
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
