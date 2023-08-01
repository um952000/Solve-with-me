//we are importing everything(*) from api

import * as api from '../api';

//Action Creators
//we have used async(dispatch) to handle heavy data of all posts called payload here
export const getPosts = () => async(dispatch)=>{

      try{
     
     const { data } = await api.fetchPosts();

     dispatch({type:'FETCH_ALL', payload: data});

      }
      catch(error){
         
          console.log(error.message)
      }

}