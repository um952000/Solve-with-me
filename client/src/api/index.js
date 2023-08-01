import axios from 'axios';

const url = 'http://localhost:5000/posts/';

//function to fetching post from the url that are in the database......................
export const fetchPosts = () => axios.get(url);