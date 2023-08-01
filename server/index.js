import express from 'express';
// body-parser is a middleware that is used to parse the incoming request bodies in a more convenient way. 
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict webpages from making requests to a different domain than the one that served the webpage. This is a mechanism designed to enhance the security of web applications and prevent unauthorized access to resources.
import cors from 'cors';