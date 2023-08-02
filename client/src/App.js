import React,{useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

//importing image
import Solve from './Images/Solve2.jpg';

import { getPosts } from './actions/posts';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles';



const App = () => {

      const classes = useStyles();
  // dispatch trigger the action as we cannot directly call the function
      const dispatch = useDispatch();

      useEffect(()=>{
         dispatch(getPosts());
      },[dispatch]);

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
                <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
     </Container>
  )
}

export default App;