//In this particular file we will declare all the diff diff routes

import express from "express";

const router = express.Router();

import { getPosts, createPost } from "../controllers/posts.js";

//creating the routers
router.get('/',getPosts);
router.post('/',createPost);

export default router;