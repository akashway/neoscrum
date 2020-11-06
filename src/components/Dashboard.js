import React, { useEffect,useState } from 'react'
import './dasboardStyles.css';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import 'moment-timezone';
import { Redirect } from 'react-router';
import axios from 'axios';
import Child from './Child'
import Button from 'react-bootstrap/Button'

//Dashboard Functional Component
/**
 * @author Akash Mishra
 * @requires Parent App Components
 * @description Basic logo and username is displayed at the top.List of feedbacks available in backend is showed with the help css grid.Timer is alse added using oment react js.API is called to validate all input field credential
 * @returns Static Dashboard design.Also return API links result in order to proper navigation between all pages off APP
 */

function Dashboard(){

    
    const feedbackButtonStyle={
        position:"absolute",
            // backgroundColor:"rgb(123, 50, 168)",
            // color:"white",
            // padding:"10px",
            // border:"1px solid rgb(123, 50, 168)",
            // borderRadius:"2px",
            top:"25px",
            right:"190px"
    }

    const logoutButtonStyle={
        position:"absolute",
        // backgroundColor:"red",
        // color:"white",
        // padding:"10px",
        margin:"5px",
        // border:"1px solid red",
        // borderRadius:"2px",
        top:"20px",
        right:"80px"
    }

    const feedbackStyleOne={
        backgroundColor:"chocolate",
        width:"350px",
        height:"30px",
        marginLeft:"10px",
        marginTop:"7px"
    }

    const feedbackStyleTwo={
        backgroundColor:"blue",
        width:"350px",
        height:"30px",
        marginLeft:"10px",
        marginTop:"7px",
        textAlign:"center"
    }

    const feedbackStyleThree={
        backgroundColor:"yellow",
        width:"350px",
        height:"30px",
        marginLeft:"10px",
        marginTop:"7px",
        textAlign:"center"
    }

    const feedbackStyleFour={
        backgroundColor:"green",
        width:"350px",
        height:"30px",
        marginLeft:"10px",
        marginTop:"7px",
        textAlign:"center"
    }

    const feedbackStyleFive={
        backgroundColor:"violet",
        width:"350px",
        height:"30px",
        marginLeft:"10px",
        marginTop:"7px",
        textAlign:"center"
    }

    const feedbackStyleSix={
        backgroundColor:"chocolate",
        width:"350px",
        height:"30px",
        marginLeft:"10px",
        marginTop:"7px",
        textAlign:"center"
    }

    const moment=require("moment")
    const m=moment();
    const m2=moment('2020-09-03')
    console.log(m2.fromNow())
    const dateToFormat = '1976-04-19T12:59-0500';

    console.log(localStorage.token)

    const [logoutStatus,setLogoutStatus]=useState(false)
    
    const handleToken=() =>{

        localStorage.removeItem("token")
        console.log(localStorage.token)
        alert("successfully logout")
        setLogoutStatus(true)
    }

    // if(localStorage.token) {
    //     axios.post("http://180.149.241.208:3047/feedback",{
    //         headers:{ Authorization:localStorage.token
    //         }
    //     })
    //     .then( response =>{
    //         console.log(response.data.feedack.length)

    //     })

    // }

/**
 * @requires Dashboard Page Function 
 * @description Effect hooks is use.After rendering it runns one time and it  establishing API connection.
 * @returns Successful or Unsuccessful API Connection
 */ 

    useEffect(()=>{
        if(localStorage.token) {
            axios.get("http://180.149.241.208:3047/feedback",{
                headers:{ Authorization:localStorage.token
                }
            })
            .then( response =>{
                console.log(response.data)
                localStorage.setItem("feedbackResponse",response.data.message)
    
            })
    
        }
    },[])

    const [feedack,setfeedback]=useState(false)

    function handleAddFeedback(){

        if(localStorage.token)
        {
            setfeedback(true)
            console.log(localStorage.token)
        }
        else{
            setfeedback(false)
            console.log(localStorage.token)
        }

    }

       
    

    

   

    return(

            <div className="dashboardBox">

            <div className="dashboardHeader">
                
                <div className="nameLogo">
                <img style={{width:"70px",height:"70px",borderRadius:"50px"}} src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-600w-1011569245.jpg" alt="Profile Photo"/ >
                <span style={{position:"relative",left:"10px",top:"0px"}}>Akash Mishra</span>
                </div>

                <div className="logout">
                        <Button style={feedbackButtonStyle} variant="primary" size="lg" onClick={handleAddFeedback}>Add Feedback</Button>
                        <Button style={logoutButtonStyle} variant="danger" size="lg" onClick={handleToken}>Logout</Button>
                </div>

            </div>
{/* 
            <div>
                    <h1>Hello</h1>
                    <h1>{localStorage.feedbackResponse}</h1>
            </div> */}

            {   !((localStorage.feedbackResponse)==="You have no feedback")  ?
                
                <div className="feedbackGridBox">

                <div className="feedbackGrid">
                    <div className="one">
                        <div style={feedbackStyleOne}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                        <Child/>
                        </div>
                    </div>

                    <div className="two">
                        <div style={feedbackStyleTwo}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                        <Child/>
                        </div>
                    </div>

                    <div className="three">
                        <div style={feedbackStyleThree}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                        <Child/>
                        </div>
                    </div>

                    <div className="four">
                        <div style={feedbackStyleFour}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                        <Child/>
                        </div>
                    </div>

                    <div className="five">
                        <div style={feedbackStyleFive}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                        <Child/>
                        </div>
                    </div>

                    <div className="six">
                        <div style={feedbackStyleSix}><span style={{float:"left",paddingLeft:"15px"}}>Feedbacks</span>
                        <Child/>
                        </div>
                    </div>

                </div>

            </div>:<div className="response"><h1>{(localStorage.feedbackResponse) }</h1></div> }

            { !(localStorage.token) ? <Redirect to='/login'/> :<Redirect to='/dashboard'/>}
            {!(localStorage.token) ? console.log("no token available") :console.log("yes token available") }
            {feedack ? <Redirect to='/submitdashboard'/> : null}
            {logoutStatus ? <Redirect to='/login'/> : null}
             
        </div>
    )
}
export default Dashboard