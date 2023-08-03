//This file is created to add multiple post from post.js file

import React from 'react';

//for fetching the data
import { useSelector } from 'react-redux';

import Post from './Post/Post';

import useStyles from './Styles';

const Posts = () => {

  //we are here fetching our posts to show upon it...
    const posts = useSelector((state)=> state.posts);
    const classes = useStyles();

    console.log(posts);
 
    return (

    <>
    <h1>POSTS</h1>
     <Post/>
    </>
   
  )
}

export default Posts;
