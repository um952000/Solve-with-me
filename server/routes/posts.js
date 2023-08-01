import express from "express";

//importing functions from controllers of posts.js.....
import { getPosts, createPost } from '../controllers/posts.js'

//importing Router module from expressJS
const router = express.Router();

router.get('/',getPosts);
router.post('/',createPost);

 
export default router;