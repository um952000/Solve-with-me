//useState hook is imported to change the state of the form from initial to something
import React,{useState} from 'react';

//importing some material UI components
import { TextField, Button, Typography, Paper } from '@material-ui/core';

//for converting the input file or image into a string
import FileBase from 'react-file-base64';

//importing useDispatch for dispatching the actions
import { useDispatch } from 'react-redux';

import useStyles from './Styles';

import { createPost } from '../../actions/posts';

const Form = () => {

   //for filling the form from initial empty to something
       const [postData, setPostData] = useState({
            
             creator: '', title:'', message: '', tags: '', selectedFile: '',
       });

    const classes = useStyles();

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
    
      //It made prevention from the default submission of the form
      e.preventDefault();

     dispatch(createPost(postData));

         
    }

      const clear = () =>{


      }


  return (
         
    <Paper className={classes.paper}>
       <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
       <Typography variant="h6">Creating a Query</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}


export default Form;


// ...postData called spread operator is used so that we can have same data of all other component and can change the value of that particular field only. 
