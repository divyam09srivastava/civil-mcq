import React ,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "./Firebase/index";




export default function Home() {
    const [question,setQuestion] = React.useState([]);
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
        // const fetchquestion = async() =>
        // {
        //     const response=firebase.db
        //     .collection("questions");
        //     const data=await response.get();
        //     console.log(data)
        //     data.docs.forEach(item=>{
        //      setQuestion([...question,item.data()])
             
        //     })
            
        // };
          fetchdata();
        //   fetchquestion();
    },[]);

    return (
        
       <> 
       
       <h2 className="d-flex justify-content-center" style={{color:"blue"}}>{question[0].category}</h2>
      {
          
         question && question.map(ques=>{
          return(
            <div className="ques-container">
              <p>{ques.id}. {ques.question}</p>
              <p>A. {ques.optionA}</p>
              <p>B. {ques.optionB}</p>
              <p>C. {ques.optionC}</p>
              <p>D. {ques.optionD}</p>
              <p style={{color:"green"}}>Correct : {ques.correct}</p>
            </div>
          )
        })
      }
   </>
 
            
    );
}

