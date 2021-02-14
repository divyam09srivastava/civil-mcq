import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Breadcrumb} from "react-bootstrap";
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import {Link} from "react-router-dom"
import "./Frontpage.css";
import Header from './header';
import {withRouter} from "react-router-dom";
import firebase from "./Firebase/index";
function Frontpage({history}) {

    const [topics,setTopics] = React.useState([]);
    const [topicstwo,setTopicstwo] = React.useState([]);
    var data;
    var data2;
    useEffect(() => {

        const fetchdata = async () => {
           await firebase.db
            .collection("Topics")
            .get()
            .then((querySnapshot) => {
               data = querySnapshot.docs.map((doc) => doc.data());
               console.log(data);
               console.log(data[0]);
            //   console.log(RandomNumber);
               setTopics(data);
            });
        };
        const fetchdata2 = async () => {
           await firebase.db
            .collection("Topics2")
            .get()
            .then((querySnapshot) => {
               data2 = querySnapshot.docs.map((doc) => doc.data());
               console.log(data2);
               console.log(data2[0]);
            //   console.log(RandomNumber);
               setTopicstwo(data2);
            });
        };
          fetchdata();
          fetchdata2();
        
    },[]);


    return (
        <>
        <Header />
        <div className="container">
            <Breadcrumb style={{fontSize:"14px",fontFamily:"arial",fontWeight:"bold"}}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active  style={{color:"green"}}>List of Topics</Breadcrumb.Item>
            </Breadcrumb>
            <div className="row " style={{marginTop:"15px"}}>
                <div className="col-lg-6 col-sm-12  d-flex justify-content-center topics">
                {
                    topics.map(topic=>
                        {
                            return(
                            <Link className="formargin" to={`/1/${topic.Topicname}/1`}><CollectionsBookmarkIcon/>{topic.Topicname}</Link> 
                            )
                        })
                }
                </div>
                <div className="col-lg-6 col-sm-12  d-flex justify-content-center topics">
                {
                    topicstwo.map(topictwo=>
                        {
                            return(
                            <Link className="formargin" to={`/2/${topictwo.Topicname2}`}><CollectionsBookmarkIcon/>{topictwo.Topicname2}</Link> 
                            )
                        })
                }
                </div>
                
            </div>
            
        </div>
        </>
    )
}
export default withRouter(Frontpage);