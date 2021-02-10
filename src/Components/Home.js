import React ,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "./Firebase/index";
import "./Home.css"
import { Button } from '@material-ui/core';



export default function Home() {
    const [question,setQuestion] = React.useState([]);
    const [answer,setAnswer]=React.useState(null);
    var data;
    useEffect(() => {

        const fetchdata = async () => {
           await firebase.db
            .collection("questions")
            .get()
            .then((querySnapshot) => {
               data = querySnapshot.docs.map((doc) => doc.data());
               console.log(data);
               console.log(data[0]);
            //   console.log(RandomNumber);
               setQuestion(data);
            });
        };
          fetchdata();
        
    },[]);

    return (
        
       <> 
       
       <h2 className="d-flex justify-content-center" style={{color:"blue"}}>Building-Materials</h2>
       <br></br>
      {
          
         question && question.map(ques=>{
          return(
            <div className="ques-container">
              <p>{ques.id}. {ques.question}</p>
             
              <p><span className="question-style">A.</span> <span>{ques.optionA}</span></p>
              <p><span className="question-style">B.</span> <span>{ques.optionB}</span></p>
              <p><span className="question-style">C.</span> <span>{ques.optionC}</span></p>
              <p><span className="question-style">D.</span> <span>{ques.optionD}</span></p>
              <br>
              </br>
              {answer===ques.id?<p style={{color:"green",fontFamily:"Montserrat",fontSize:"Larger"}}>{ques.correct}</p>:<></>}
              <Button variant="outlined" style={{background:"white",color:"blue",border:"1",fontWeight:"bold"}} onClick={()=>{setAnswer(ques.id)}}>View Answer</Button>
              <br></br>
            </div>
          )
        })
      }
   </>
 
            
    );
}

