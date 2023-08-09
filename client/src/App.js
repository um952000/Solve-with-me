import React,{useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';


//importing posts and form component accordingly
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

//importing top bar image
import Solve from './Images/Solve2.jpg';

import { getPosts } from './actions/posts';

import useStyles from './styles';


const App = () => {

    //Just a material UI syntax for adding styles we use it as classes.appBar,  classes.heading etc
      const classes = useStyles();



  // dispatch trigger the action as we cannot directly call the function........................
      const dispatch = useDispatch();

      //using dispatch to dispatch an action...................
      //getPosts is an action called using dispatch
      useEffect(()=>{
        dispatch(getPosts());
      },[dispatch]);


      //writing the material UI code simply for the creation of different components namely form, Post, upper part etc 

  return (
     <Container maxwidth="lg" >
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">SOLVE WITH ME</Typography>
        <img className={classes.image} src={Solve} alt="Solve" height="300" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify-content="space-between" alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
            {/* Posts goes here */}
                <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
            {/* Form goes here */}
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
     </Container>
  )
}

export default App;