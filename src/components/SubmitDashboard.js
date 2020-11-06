import React from 'react'
import { useEffect,useState, useRef} from 'react'
import axios from 'axios'
import './submitDashboardStyles.css';
import { Redirect } from 'react-router';
import Button from 'react-bootstrap/Button'

//Add Dashboard Functional Component
/**
 * @author Akash Mishra
 * @requires Parent App Components
 * @description Basic logo and username is displayed at the top.List of feedbacks available in backend is showed with the help css grid Timer.API is called to validate all input field credential
 * @returns Static Add Dashboard design.Also return API links result in order to proper navigation between all pages off APP
 */

function SubmitDashboard(){


    const textOneRequiredRef= useRef(null)
    const textTwoRequiredRef= useRef(null)
    const textThreeRequiredRef= useRef(null)
    const textOnelableRef= useRef(null)
    const textTwolableRef= useRef(null)
    const textThreelableRef= useRef(null)
    const [values,setValues]=useState({textareaOne:"",textareaTwo:"",textareaThree:""})


    const logoutButtonStyleTwo={
        position:"absolute",
        // backgroundColor:"red",
        // color:"white",
        // padding:"10px",
        marginRight:"20px",
        // border:"1px solid red",
        // borderRadius:"2px",
        top:"25px",
        right:"40px"
    }

    const submitFeedbackStyleOneButton={
        position:"relative",
            top:"10px",
            left:"67px",
            // backgroundColor:"rgb(123, 50, 168)",
            // border:"2px solid rgb(123, 50, 168)",
            // borderRadius:"2px",
            // color:"white",
            // padding:"13px",
            // width:"160px"
    }

    const submitFeedbackStyleTwoButton={
        position:"relative",
            top:"10px",
            left:"67px",
            // backgroundColor:"rgb(123, 50, 168)",
            // border:"2px solid rgb(123, 50, 168)",
            // borderRadius:"2px",
            // color:"white",
            // padding:"13px",
            // width:"160px"
    }

    const submitFeedbackStyleThreeButton={
        position:"relative",
            top:"10px",
            left:"67px",
            // backgroundColor:"rgb(123, 50, 168)",
            // border:"2px solid rgb(123, 50, 168)",
            // borderRadius:"2px",
            // color:"white",
            // padding:"13px",
            // width:"160px"
    }

    const submitFeedbackStyleTextarea={

        marginTop:"65px",
        marginBottom:"10px"

    }

    const changeHandlerOne= (event) =>{
    

        setValues({
            textareaOne:event.target.value
        });

    }

    const changeHandlerTwo= (event) =>{
    

        setValues({
            textareaTwo:event.target.value
        });

    }

    const changeHandlerThree= (event) =>{
    

        setValues({
            textareaThree:event.target.value
        });

    }



    
    function clickHandlerOne(){
        if(values.textareaOne===""){
            textOneRequiredRef.current.style.border="2px solid red"
            textOnelableRef.current.style.display="block"
        }
        else{
            textOneRequiredRef.current.style.border="0.5px solid black"
        }
    }
    function clickHandlerTwo(){
        if(values.textareaTwo===""){
            textTwoRequiredRef.current.style.border="2px solid red"
            textTwolableRef.current.style.display="block"
        }
        else{
            textTwoRequiredRef.current.style.border="0.5px solid black"
        }
    }

    function clickHandlerThree(){
        if(values.textareaThree===""){
            textThreeRequiredRef.current.style.border="2px solid red"
            textThreelableRef.current.style.display="block"
        }
        else{
            textThreeRequiredRef.current.style.border="0.5px solid black"
        }
    }



/**
 * @requires Add Dashboard Page Function 
 * @description Effect hooks is use.After rendering it runns one time and it  establishing API connection.
 * @returns Successful or Unsuccessful API Connection
 */ 

    useEffect(()=>{
        if(localStorage.token) {
            axios.get("http://180.149.241.208:3047/dashboard",{
                headers:{ Authorization:localStorage.token
                }
            })
            .then( response =>{
                console.log(response.data)
                localStorage.setItem("feedbackResponseTwo",response.data.message)
    
            })
    
        }
    },[])

    const [logoutStatus,setLogoutStatus]=useState(false)


    const handleLogout=() =>{

        localStorage.removeItem("token")
        console.log(localStorage.token)
        alert("successfully logout")
        setLogoutStatus(true)

    }

    

    return(
        <div>

            <div class="submitDashboardHeader">

                {/* <div class="submitName">
                    Akash Mishra
                </div> */}
                <div className="submitName">
                    <img style={{position:"relative",width:"70px",height:"70px",borderRadius:"50px",bottom:"15px"}} src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-600w-1011569245.jpg" alt="Profile Photo"/ >
                    <span style={{position:"absolute",left:"140px",top:"35px",}}>Akash Mishra</span>
                </div>

                <div class="submitLogout">
                    <Button style={logoutButtonStyleTwo} variant="danger" size="lg" onClick={handleLogout}>Logout</Button>
                </div>

            </div>

            {/* <div>
                    <h1>Hello</h1>
                    <h1>{localStorage.feedbackResponseTwo}</h1>
            </div> */}

            <div>

                { !((localStorage.feedbackResponseTwo)==="You do not have any receiver name to give feedback") ?

                    <div className="submitFeedbackGrid">

                        <div className="submitOne">
                            <div>
                            <img style={{width:"70px",height:"70px",borderRadius:"50px",marginTop:"60px"}} src="https://www.yourtango.com/sites/default/files/image_blog/types-guys-who-stay-single-men.jpg" alt="Profile Photo"/ >
                            </div>
                            <div>
                                <textarea ref={textOneRequiredRef} value={values.textareaOne} style={submitFeedbackStyleTextarea} onChange={changeHandlerOne} onBlur={clickHandlerOne} rows="2" cols="43" ></textarea>
                                <label ref={textOnelableRef} style={{color:"red", display:"none",float:"left",position:"absolute",top:"410px",left:"88px"}}>** this field must have value</label>
                                <Button style={submitFeedbackStyleOneButton} variant="primary" size="lg" onClick={clickHandlerOne}>Submit Feedback</Button>
                            </div>
                        </div>

                        <div className="submitTwo">
                        <div>
                            <img style={{width:"70px",height:"70px",borderRadius:"50px",marginTop:"60px"}} src="https://www.yourtango.com/sites/default/files/image_blog/types-guys-who-stay-single-men.jpg" alt="Profile Photo"/ >
                            </div>
                            <div>
                                <textarea ref={textTwoRequiredRef} value={values.textareaTwo} style={submitFeedbackStyleTextarea} onChange={changeHandlerTwo} onBlur={clickHandlerTwo} rows="2" cols="43" ></textarea>
                                <label ref={textTwolableRef} style={{color:"red", display:"none",float:"left",position:"absolute",top:"410px",left:"517px"}}>** this field must have value</label>
                                <Button style={submitFeedbackStyleTwoButton} variant="primary" size="lg" onClick={clickHandlerTwo}>Submit Feedback</Button>
                            </div>
                        </div>

                        <div className="submitThree">
                        <div>
                            <img style={{width:"70px",height:"70px",borderRadius:"50px",marginTop:"60px"}} src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-600w-1011569245.jpg" alt="Profile Photo"/ >
                            </div>
                            <div>
                                <textarea ref={textThreeRequiredRef} value={values.textareaThree} style={submitFeedbackStyleTextarea} onChange={changeHandlerThree} onBlur={clickHandlerThree} rows="2" cols="43" ></textarea>
                                <label ref={textThreelableRef} style={{color:"red", display:"none",float:"left",position:"absolute",top:"410px",left:"947px"}}>** this field must have value</label>
                                <Button style={submitFeedbackStyleThreeButton} variant="primary" size="lg" onClick={clickHandlerThree}>Submit Feedback</Button>
                            </div>
                        </div> 

                </div>:<h1>{localStorage.feedbackResponseTwo}</h1> }

            </div>

            { !(localStorage.token) ? <Redirect to='/login'/> :<Redirect to='/submitdashboard'/>}
            {logoutStatus ? <Redirect to='/login'/> : null}


        </div>
    )
}
export default SubmitDashboard
