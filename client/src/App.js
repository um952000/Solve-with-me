import React,{ useEffect } from "react";

//importing all the Material UI component..........
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

//importing useDispatch hook from react redux
import { useDispatch } from 'react-redux';

//importing useDispatch hook from react-redux
import { getPosts } from './actions/posts';

//importing the image
import Untitled from './images/my.webp';

//importing Posts and Form component from their respective folder
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';

//importing styles.js file..............
import useStyles from './styles';

const App = () =>{

     //Material UI things
     const classes = useStyles();

     //defining dispatch 
     const dispatch = useDispatch();

     useEffect(()=>{

      //we cannot directly call getPosts() so we use dispatch as it hit the event
            dispatch(getPosts());
     },[])

    return(

        <Container maxWidth="lg">
            <AppBar className={classes.heading} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">SOLVE-WITH-ME</Typography>
                <img className={classes.image} src={Untitled} alt="memories" height="250" />
            </AppBar>
            <Grow in>
            <Container >
            <Grid container justify-content="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
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

//exporting our app
export default App;