import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import firebase from "../Firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();


// id,
// question,
// category,
// optionA,
// optionB,
// optionC,
// optionD,
// correct
  const [id, setId] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [sec, setSec] = React.useState("");
  const [optionA, setOptionA] = React.useState("");
  const [optionB, setOptionB] = React.useState("");
  const [optionC, setOptionC] = React.useState("");
  const [optionD, setOptionD] = React.useState("");
  const [correct, setCorrect] = React.useState("");








  async function onSubmit() {
    try {
      await firebase.addQuestion(
        id,
    question,
    category,
    sec,
    optionA,
    optionB,
    optionC,
    optionD,
correct
      );
      setId("");
      
      
      setQuestion("");
      setCategory("");
      setSec("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setCorrect("");
    } catch (error) {
      alert(error.message);
    }


  }
 

  

  return (
    <>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          id="standard-multiline-flexible"
          label="Question--ID"
          multiline
          placeholder="Id"
          rowsMax={4}
          value={id}
          onChange={(e)=>{setId(e.target.value)}}
        />
        <TextField
          id="standard-multiline-static"
          label="Questions"
          multiline
          rows={4}
          placeholder="Question"
          value={question}
          onChange={(e)=>{setQuestion(e.target.value)}}
        />
         <TextField
          id="standard-multiline-flexible"
          label="Category"
          multiline
          placeholder="Category"
          rowsMax={4}
          value={category}
          onChange={(e)=>{setCategory(e.target.value)}}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Section Number"
          multiline
          placeholder="Section number"
          rowsMax={4}
          value={sec}
          onChange={(e)=>{setSec(e.target.value)}}
        />
        
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Aoption"
          multiline
          rowsMax={4}
          placeholder="OptionA"
          value={optionA}
          onChange={(e)=>{setOptionA(e.target.value)}}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Boption"
          placeholder="OptionB"
          multiline
          value={optionB}
          onChange={(e)=>{setOptionB(e.target.value)}}
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Coption"
          multiline
          rows={4}
          placeholder="optionc"
          value={optionC}
          onChange={(e)=>{setOptionC(e.target.value)}}
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Doption"
          multiline
          rows={4}
          placeholder="optiond"
          value={optionD}
          onChange={(e)=>{setOptionD(e.target.value)}}
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Correct-answer"
          multiline
          rows={4}
          placeholder="correct answer"
          value={correct}
          onChange={(e)=>{setCorrect(e.target.value)}}
          variant="filled"
        />
      </div>
      <Button onClick={()=>{onSubmit()}}>ADD</Button>
    </form>
 
  </>
  );
}