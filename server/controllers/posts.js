//here we will declare and define the function for diff diff routers

//importing mongoose model
import PostMessage from "../models/postMessage.js";

export const getPosts = async(req,res) =>{
    try{
        
          const postMessages = await PostMessage.find();
          console.log(postMessages);

          res.status(200).json(postMessages);
    }
    catch(error){

        res.status(200).json({ message: error.message});
    }
}

export const createPost = async (req,res) =>{
    
    //a new post data is being collected........
    const post = req.body();

    //new post creation using PostMessage model.....
    const newPost = new PostMessage(post);

    try{

      await  newPost.save();

      res.status(201).json(newPost);
      
    } catch(error){

        res.status(409).json({message: error.message});

    }
}