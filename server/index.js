import express from 'express';
// body-parser is a middleware that is used to parse the incoming request bodies in a more convenient way. 
import bodyParser from 'body-parser';

import mongoose from 'mongoose';
// CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict webpages from making requests to a different domain than the one that served the webpage. This is a mechanism designed to enhance the security of web applications and prevent unauthorized access to resources.
import cors from 'cors';
 

//importing postRoutes from routes folder.......
import postRoutes from './routes/posts.js';

//Initializing an express application.........
const app = express();

//This middleware is used to parse incoming JSON payloads. It sets a limit of '30mb' on the payload size that can be accepted. The extended option is set to true, which means it allows parsing of nested objects.
app.use(bodyParser.json({ limit: '30mb', extended: true }))
//This middleware is used to parse incoming URL-encoded payloads. URL-encoded data is typically sent in the body of a POST request with the Content-Type header set to application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

//setting up cors so that we can make request from the origin below.........
app.use(
  cors({
    origin: String("http://localhost:3000"),
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true,
  })
);
app.options("*", cors());

 
//using express middleware to connect this route to our application
app.use('/posts', postRoutes);

//creating a database url
const CONNECTION_URL = 'mongodb+srv://Utkarsh:5ogNGOBB6h0qaXIf@cluster0.trtblhz.mongodb.net/?retryWrites=true&w=majority';

//creating a port number on which it will run.........
const PORT = process.env.PORT || 5000;

//making a connection with the database using mongoose......
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));