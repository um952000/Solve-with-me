import express, { application } from 'express';
// body-parser is a middleware that is used to parse the incoming request bodies in a more convenient way. 
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict webpages from making requests to a different domain than the one that served the webpage. This is a mechanism designed to enhance the security of web applications and prevent unauthorized access to resources.
import cors from 'cors';

//importing postRoutes from routes folder
import postRoutes from './routes/posts.js';


const app = express();

//using express middleware to connect this route to our application
app.use('./posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true}));
app.use(cors());

//creating a database url
const CONNECTION_URL = 'mongodb+srv://Utkarsh:5ogNGOBB6h0qaXIf@cluster0.trtblhz.mongodb.net/?retryWrites=true&w=majority';
//creating a port number
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);