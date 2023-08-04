//here we will declare and define all the function for diff diff routes separately

import express from 'express';
import mongoose from 'mongoose';

//importing mongoose model(schema model) of our posts
import PostMessage from "../models/postMessage.js";

//creating the express router
const router = express.Router();

//finding message will take time for that reason we have used async await making this function asychronous

export const getPosts = async(req,res) =>{
   
    try{
        
          const postMessages = await PostMessage.find();
          console.log(postMessages);

          //return an array of message using .json
          res.status(200).json(postMessages);
    }
    catch(error){

        res.status(200).json({ message: error.message});
    }
}

export const createPost = async (req,res) =>{
    
    //a new post data is being collected........
   // The body of an HTTP request contains data sent by the client to the server, typically in the form of JSON or URL-encoded data. 
   //storing that JSON data into a variable called post
    const post = req.body;

    //new post creation using PostMessage model.....
    const newPost = new PostMessage(post);

    try{

      await newPost.save();

      res.status(201).json(newPost);
      
    } catch(error){

        res.status(409).json({message: error.message});

    }
}

export default router;