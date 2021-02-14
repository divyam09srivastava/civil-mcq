import React ,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "../Firebase/index";
import "./section1.css"
import { Button } from '@material-ui/core';
import {Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom"
import Header from "../header"
import ForwardIcon from '@material-ui/icons/Forward';
import {withRouter,useParams} from "react-router-dom";
import _ from "underscore";

function Section2({history}) {
  const {topic}=useParams();
    const [question,setQuestion] = React.useState([]);
    const [answer,setAnswer]=React.useState(null);
    const [topics,setTopics] = React.useState([]);
    const [section,setSections]=React.useState(null);
    var data;
    useEffect(() => {

        const fetchdata = async () => {
           await firebase.db
            .collection("questions")
            .where("category","==",`${topic}`)
            .get()
            .then((querySnapshot) => {
               data = querySnapshot.docs.map((doc) => doc.data());
               console.log(data);
               console.log(data[0]);
            //   console.log(RandomNumber);
               setQuestion(data);
            });
        };
          var data2;
        const fetchdata2 = async () => {
          await firebase.db
           .collection("Topics2")
           .where("Topicname2","==",`${topic}`)
           .get()
           .then((querySnapshot) => {
              data2 = querySnapshot.docs.map((doc) => doc.data());
              console.log(data2);
              console.log(data2[0]);
           //   console.log(RandomNumber);
              setTopics(data2[0]);
              setSections(data2[0].countsection2);
              console.log(topics.Topicname2);
              console.log(section);
           });
       };
         fetchdata();
         fetchdata2();

          
        
    },[]);

    
    const sections = () =>
    {
      
      let card = [];
      _.times(section, (i) => {
        card.push(    <Link className="formargin1" to={`/2/${topics.Topicname2}/${i+1}`}><ForwardIcon/>{topic} - Section {i+1}</Link>);
      });
      return(
        <>
        {card}
        </>
      )

    }

    return (
      <>
      <Header />
       <div className="container">
         
            <Breadcrumb style={{fontSize:"14px",fontFamily:"arial",fontWeight:"bold"}}>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">{topic}</Breadcrumb.Item>
                <Breadcrumb.Item active  style={{color:"green"}}>Section 1</Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="row"> 
            <div className=" sectionbox">
            <h3 class="overview" ><span class="ib-gray">Exercise :: </span>{topic} - Section 1</h3>
            { sections() }
            </div>
            </div> 
            
             
      {
          
         question && question.map(ques=>{
          return(
            
            <div className="ques-container" >
              <p>{ques.id}. {ques.question}</p>
               <div className="options">
              <p><span className="question-style">A.</span> <span>{ques.optionA}</span></p>
              <p><span className="question-style">B.</span> <span>{ques.optionB}</span></p>
              <p><span className="question-style">C.</span> <span>{ques.optionC}</span></p>
              <p><span className="question-style">D.</span> <span>{ques.optionD}</span></p>
              
              </div>
              {answer===ques.id?<p style={{color:"green",fontSize:"15px",fontFamily:"arial",fontWeight:"bold"}}>{ques.correct}</p>:<></>}
  
              <Button variant="outlined" style={{background:"white",color:"#007bff",border:"1",fontWeight:"bold"}} onClick={()=>{setAnswer(ques.id)}}>View Answer</Button>
              <hr className="solid"></hr>
              </div>
            
          )
        })
      }
        
   </div>
 </>
            
    );
}

export default withRouter(Section2);