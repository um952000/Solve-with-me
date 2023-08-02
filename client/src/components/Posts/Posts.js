//This file is created to add multiple post from post.js file

import React from 'react'

import Post from './Post/Post';

import useStyles from './Styles';

const Posts = () => {

    const classes = useStyles();
 
    return (

    <>
    <h1>POSTS</h1>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
    </>
   
  )
}

export default Posts;
