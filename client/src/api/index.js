import axios from 'axios';

const url = 'http://localhost:5000/posts';

//It will simply fetch all the posts from this database
export const fetchPosts = () => axios.get(url);

//api creation for the new post generated 
export const createPost = (newPost) => axios.post(url,newPost);