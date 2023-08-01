//here we will define the functions for the routes of posts.js to keep the things very simple  >>>........................

//importing schema model from postmessage file of models folder
import PostMessage from "../models/postMessage.js";


//this function is used to display posts over the frontend 
export const getPosts = async (req, res) => {

    try {

        //to find posts in the model.........
        const postMessages = await PostMessage.find();

        //postMessages contains an array of all posts.......................
        res.status(200).json(postMessages);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }
}

//this function is used to create a post ..........
export const createPost = async (req, res) => {

    // this is to be done for the fetching of data put on the form( on frontend)
    const post = req.body;

    //creating a new post
    const newPost = new PostMessage(post);

    try {

        //saving the newly created post
        await newPost.save();

        //sending response back...............
        res.status(201).json(newPost);

    } catch (error) {

        res.status(409).json({ message: error.message });

    }

}