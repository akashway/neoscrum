import React from 'react'
import { useEffect,useState} from 'react'
import axios from 'axios'
import './submitDashboardStyles.css';
import { Redirect } from 'react-router';

//Add Dashboard Functional Component
/**
 * @author Akash Mishra
 * @requires Parent App Components
 * @description Basic logo and username is displayed at the top.List of feedbacks available in backend is showed with the help css grid Timer.API is called to validate all input field credential
 * @returns Static Add Dashboard design.Also return API links result in order to proper navigation between all pages off APP
 */

function SubmitDashboard(){


    const logoutButtonStyleTwo={
        backgroundColor:"red",
        color:"white",
        padding:"10px",
        marginRight:"20px",
        border:"1px solid red",
        borderRadius:"2px"
    }

    const submitFeedbackStyleOneButton={
        position:"relative",
        top:"10px",
        left:"100px",
        backgroundColor:"rgb(123, 50, 168)",
        border:"2px solid rgb(123, 50, 168)",
        borderRadius:"2px",
        color:"white",
        padding:"13px",
        width:"160px"
    }

    const submitFeedbackStyleTwoButton={
        position:"relative",
        top:"10px",
        left:"100px",
        backgroundColor:"rgb(123, 50, 168)",
        border:"2px solid rgb(123, 50, 168)",
        borderRadius:"2px",
        color:"white",
        padding:"13px",
        width:"160px"
    }

    const submitFeedbackStyleThreeButton={
        position:"relative",
        top:"10px",
        left:"100px",
        backgroundColor:"rgb(123, 50, 168)",
        border:"2px solid rgb(123, 50, 168)",
        borderRadius:"2px",
        color:"white",
        padding:"13px",
        width:"160px"
    }

    const submitFeedbackStyleTextarea={

        marginTop:"90px"

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
                    <span style={{position:"relative",left:"10px",bottom:"45px"}}>Akash Mishra</span>
                </div>

                <div class="submitLogout">
                    <button style={logoutButtonStyleTwo} onClick={handleLogout}>Logout</button>
                </div>

            </div>

            <div>
                    {/* <h1>Hello</h1> */}
                    <h1>{localStorage.feedbackResponseTwo}</h1>
            </div>

            <div>

                <div className="submitFeedbackGrid">

                    <div className="submitOne">
                        <div>
                        <img style={{width:"70px",height:"70px",borderRadius:"50px",marginTop:"60px"}} src="https://www.yourtango.com/sites/default/files/image_blog/types-guys-who-stay-single-men.jpg" alt="Profile Photo"/ >
                        </div>
                        <div>
                            <textarea style={submitFeedbackStyleTextarea} rows="3" cols="43"></textarea>
                            <button style={submitFeedbackStyleOneButton}>Submit Feedback</button>
                        </div>
                    </div>

                    <div className="submitTwo">
                    <div>
                        <img style={{width:"70px",height:"70px",borderRadius:"50px",marginTop:"60px"}} src="https://media.vanityfair.com/photos/5df908e81216ae00085d37dc/9:16/w_749,h_1333,c_limit/little-women-man-problem-b.jpg" alt="Profile Photo"/ >
                        </div>
                        <div>
                            <textarea style={submitFeedbackStyleTextarea} rows="3" cols="43"></textarea>
                            <button style={submitFeedbackStyleTwoButton}>Submit Feedback</button>
                        </div>
                    </div>

                    <div className="submitThree">
                    <div>
                        <img style={{width:"70px",height:"70px",borderRadius:"50px",marginTop:"60px"}} src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-600w-1011569245.jpg" alt="Profile Photo"/ >
                        </div>
                        <div>
                            <textarea style={submitFeedbackStyleTextarea} rows="3" cols="43"></textarea>
                            <button style={submitFeedbackStyleThreeButton}>Submit Feedback</button>
                        </div>
                    </div>

                </div>

            </div>

            { !(localStorage.token) ? <Redirect to='/login'/> :<Redirect to='/submitdashboard'/>}
            {logoutStatus ? <Redirect to='/login'/> : null}


        </div>
    )
}
export default SubmitDashboard
