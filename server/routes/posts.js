//In this particular file we will declare all the diff diff routes where we will visit accordingly....................................

//importing express
import express from "express";

//creating a router
const router = express.Router();

import { getPosts, createPost } from "../controllers/posts.js";

//creating the routers
router.get('/',getPosts);
router.post('/',createPost);

export default router;