import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import firebase from "./Firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Addtopics2() {
  const classes = useStyles();


  const [topicnametwo, setTopicnametwo] = React.useState("");
  const [cstwo, setCstwo] = React.useState("");
  



  async function onSubmit() {
    try {
      await firebase.addTopics2(
        topicnametwo,
        cstwo
      );
      
      
      
      setTopicnametwo("");
      setCstwo("");
      
    } catch (error) {
      alert(error.message);
    }


  }
 

  

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          id="standard-multiline-flexible"
          label="Topic name"
          multiline
          placeholder="topicname"
          rowsMax={4}
          value={topicnametwo}
          onChange={(e)=>{setTopicnametwo(e.target.value)}}
        />
        <TextField
          id="standard-multiline-static"
          label="sections count"
          multiline
          rows={4}
          placeholder="cstwo"
          value={cstwo}
          onChange={(e)=>{setCstwo(e.target.value)}}
        />
       
        
      </div>
    
    
      <Button onClick={()=>{onSubmit()}}>ADD</Button>
    </form>
  );
}