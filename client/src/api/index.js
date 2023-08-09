// Its primary purpose is to simplify the process of making HTTP requests and handling responses. Axios provides an easy-to-use API that allows developers to interact with APIs and fetch data from servers, making it a valuable tool for client-side and server-side applications.

import axios from 'axios';

const url = 'http://localhost:5000/posts';

//It will simply return all the posts from the database
export const fetchPosts = () => axios.get(url);

//api creation for the new post generated 
export const createPost = (newPost) => axios.post(url,newPost);