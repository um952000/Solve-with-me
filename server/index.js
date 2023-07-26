import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js'; 

//This line creates an instance of an Express application.
const app = express();

//using express middleware to connect routes to application
 app.use('/posts', postRoutes);//every route inside postRoutes start with /posts

//The bodyParser.json() middleware is used to parse incoming JSON data from the request body. 
app.use(bodyParser.json({limit: "30mb", extended: true}));
// This line adds another middleware to the Express application. The bodyParser.urlencoded() middleware is used to parse incoming URL-encoded data from the request body. URL-encoded data is commonly used in HTML form submissions.
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
//CORS is used to allow or restrict access to resources on a web server from a different domain.
app.use(cors());



//Database url setup from mongodb atlas
const CONNECTION_URL = 'mongodb+srv://utkarsh:dRnsMK4m2arCHjHc@cluster0.tfrerci.mongodb.net/?retryWrites=true&w=majority';


//creating a port
const PORT = process.env.PORT || 5000;


//using mongoose to connect application to database(mongodb) its syntax is as.........................
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port= http://localhost:${PORT}`))) // when connection become successful
  .catch((error) => console.log(`${error} did not connect`)); // connection failed


  //mongoose.set('useFindAndModify',false);