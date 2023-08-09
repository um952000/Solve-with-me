//import everything as api
import * as api from '../api/index.js';

//Action creators are function that return an action

export const getPosts = () => async (dispatch) => {
    try {
        //fetching all the posts data 
      const { data } = await api.fetchPosts();
  
      //dispatching an action named 'FETCH_ALL'
      dispatch({ type: 'FETCH_ALL' , payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

// function for the creation of the new Post.......... 

export const createPost = (post) =>async(dispatch)=>{

   try {

    const {data} = await api.createPost(post);

    dispatch({ type: 'CREATE', payload:data});
    
   } catch (error) {

    console.log(error.message);
    
   }

}


//getPosts, createPost etc are all the actions......................