//import everything from api
import * as api from '../api';

//Action creators are function that return an action

export const getPosts = () => async (dispatch) => {
    try {
        //fetching the posts data
      const { data } = await api.fetchPosts();
  
      dispatch({ type: 'FETCH_ALL' , payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };