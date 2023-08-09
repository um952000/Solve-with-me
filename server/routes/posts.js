//In this particular file we will declare all the diff diff routes where we will visit accordingly....................................

//importing express
import express from "express";

//creating a router
const router = express.Router();

//importing all those functions which will be executed accordingly for the diff diff routes......
import { getPosts, createPost } from "../controllers/posts.js";

//creating the routers(or we can say path to different components)
router.get('/',getPosts);
router.post('/',createPost);

export default router;