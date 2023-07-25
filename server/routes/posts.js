import express from "express";

import { getPosts, createPost, updatePost, deletePost,likePost } from '../controllers/posts.js'


const router =  express.Router();


router.get('/', getPosts);
router.post('/', createPost);
// patch is used for updating existing document

router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);


export default router;