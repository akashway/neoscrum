import React,{ useEffect, useState, useRef} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router';
import './ForgetPassword.js';
import Button from 'react-bootstrap/Button'
import * as ReactBootStrap from 'react-bootstrap'

//Login Functional Component
/**
 * @author Akash Mishra
 * @requires Parent App Components
 * @description Create a basic login page with two input field and forget password functionality.User can also upload there image in image folder.Proper API is called to validate all login credential
 * @returns Two Input Fields,Image uploader,Login Button and forget password Functionality.Also return API links result in order to proper navigation between all pages off APP
 */

function LoginPage(){

    // const {handleChange,handleSubmit,values}=useForm(submit)

    // function submit(){
    //     console.log("submited succesfully")
    // }


    const logo={
        fontSize:"25px",
        marginTop:"20px",
        
    }
    const firstHeading={
        color:"red",
    }

    const formBox={
        border:"1px solid rgb(209, 240, 235)",
        width:"300px",
        height:"470px",
        margin:"70px auto",
        borderBottom:"1px solid rgb(76, 82, 80)",
        boxSizing: "border-box"

    } 

    const emailField={
        margin:"20px 20px 5px 22px",
        float:"left",
        padding:"10px",
        borderBottom: "1px solid rgb(76, 82, 80)",
        borderLeft: "3px solid white",
        borderRight: "3px solid white",
        borderTop: "3px solid white"
    }

    const passwordField={
        margin:"5px 20px 5px 22px",
        float:"left",
        padding:"10px",
        borderBottom: "1px solid rgb(76, 82, 80)",
        borderLeft: "3px solid white",
        borderRight: "3px solid white",
        borderTop: "3px solid white"
    }

    const buttonStyle={
        // backgroundColor:"rgb(123, 50, 168)",
        // position:"relative",
        // color:"white",
        float:"left",
        // border:"1px solid rgb(123, 50, 168)",
        // borderRadius:"3px",
        marginTop:"40px",
        marginLeft:"110px",
        marginBottom:"5px"
       
    }

    const passwordRef= useRef(null)
    const passLabeleReqRef=useRef(null)
    const passLabeleAlpaNumRef=useRef(null)
    const passLabeleLengthRef=useRef(null)
    const emailRef=useRef(null)
    const emailLabeleReqRef=useRef(null)
    const emailLabeleProperRef=useRef(null)
    const greetingForLogin=useRef()
    const regxPasswoord=new RegExp("^(?=.*[!@#$%^&*])")
    const regxEmail= new RegExp(/^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)

/**
 * @requires login Page Function 
 * @description Validate the feilds.There is proper email and password should be entered using validation function
 * @returns CSS Styles which need to change on entering unaccepected details.
 */ 
    function validationLogin() {

        if(values.password===""){
            passwordRef.current.style.border="2px solid red"
            passLabeleReqRef.current.style.display="block"
        }

        if(values.email===""){
            emailRef.current.style.border="2px solid red"
            emailLabeleReqRef.current.style.display="block"
        }


        // employeeNameRef.current.style.border="2px solid red"
    }

/**
 * @requires login Page Function 
 * @description Validate the Password feilds on Blur.There is proper password should be entered using blur validation function
 * @returns CSS Styles which need to change on entering unaccepected details.
 */ 

    function handlePassBlur(){

        if(values.password===""){
            passwordRef.current.style.border="2px solid red"
            passLabeleReqRef.current.style.display="block"
            passLabeleAlpaNumRef.current.style.display="none"
            passLabeleLengthRef.current.style.display="none"
        }

        else if(regxPasswoord.test(values.password)){
            passwordRef.current.style.border="0.5px solid black"
            passLabeleAlpaNumRef.current.style.display="none"
            passLabeleReqRef.current.style.display="none"
            passLabeleLengthRef.current.style.display="none"
        }

        else if(values.password.length<8 || values.password.length>13 ){
            passwordRef.current.style.border="2px solid red"
            passLabeleLengthRef.current.style.display="block"
            passLabeleReqRef.current.style.display="none"
            passLabeleAlpaNumRef.current.style.display="none"
        }
        else{
            passwordRef.current.style.border="0.5px solid black"
            passLabeleReqRef.current.style.display="none"
            passLabeleAlpaNumRef.current.style.display="none"
            passLabeleLengthRef.current.style.display="none"
        }
    }

/**
 * @requires login Page Function 
 * @description Validate the Email feilds on Blur.There is proper Email should be entered using blur validation function
 * @returns CSS Styles which need to change on entering unaccepected details.
 */ 

    function handleEmailBlur(){

        if(values.email===""){
            emailRef.current.style.border="2px solid red"
            emailLabeleReqRef.current.style.display="block"
            emailLabeleProperRef.current.style.display="none"
        }

        else if((regxEmail.test(values.email))===false){
            emailRef.current.style.border="2px solid red"
            emailLabeleProperRef.current.style.display="block"
            emailLabeleReqRef.current.style.display="none"
            
        }

        else{
            emailRef.current.style.border="0.5px solid black"
            emailLabeleProperRef.current.style.display="none"
            emailLabeleReqRef.current.style.display="none"
        }

    }

    const [values,setValues]=useState({email:"",password:"",})

    // const [cred,setCred]=useState(false)


    const handleChange= (event) =>{
        console.log(event.target.name)
        console.log(event.target.value)

        setValues({ ...values,
            [event.target.name]:event.target.value
        });

    }

    const newRegistration={

        user_email:values.email,
        user_pass:values.password
    };

/**
 * @requires login Page Function 
 * @description On Submit function validate the field and it also establishing API connection on Login
 * @returns Successful or Unsuccessful API Connection
 */ 
    
    const [loading,setLoadingStatus]=useState(false)

    const clickHandler=(event) =>{
        event.preventDefault();
        console.log("pogo")
        validationLogin()

        if(values.email && values.password) {
            axios.post("http://180.149.241.208:3047/login",newRegistration)
            .then( response =>{
                console.log(response)
                localStorage.setItem("token",response.data.token)
                localStorage.setItem("name",response.data.user_name)
                localStorage.setItem("email",response.data.user_email)
                localStorage.setItem("success",response.data.success)
                console.log("yes")
                handleSubmit()

            }
            )
            .catch(error =>{
                console.log(error)
                setLoadingStatus(false)
                alert("Enter Credential is wrong")

            }
            )

            // count=count+1
                // console.log(response)
            

            // if(response.data.success==="true"){
            //     console.lo   g("hello world")
            // }

                // if(count==2){
                //     if(!(localStorage.getItem("token"))){

                //         alert("Enter Credential is wrong")
                //     }
                // }

                console.log("yes")
                setLoadingStatus(true)
            
    
        }
        
        console.log(localStorage)
        // console.log(localStorage.getItem("token"))
        // console.log(localStorage.getItem("name"))
        // console.log(localStorage.getItem("email"))
        // console.log(localStorage.getItem("success"))


    }

    const [login,setLogin]=useState(false)

    

        function handleSubmit(){
            if(localStorage.token)
        {
            setLogin(true)
            console.log(localStorage.token)
        }
        else{
            setLogin(false)
            console.log(localStorage.token)
        }

        console.log(login)
        }





    
    // useEffect(()=>{
    //     if(localStorage.token)
    //     {
    //         setLogin(true)
    //         console.log(localStorage.token)
    //     }
    //     else{
    //         setLogin(false)
    //         console.log(localStorage.token)
    //     }

    //     console.log(login)

    // },[])
    

    // const handleLogin=() =>{

    //     console.log(response.data.success)
        
    // }

    // const borderField="2px solid black";
    // const [border,setBorder]=useState(borderField);
    // const [title, setEmployeeName] = useState('')


    // function employeeNameHandler(){
    //     const newBorder="2px solid red"
    //     setBorder(newBorder)

    // }

        return(
            // <div>
            // {
            //         !(localStorage.token) &&
            
            <div>
        
                <div className="logoMediaQuery" style={logo}>
                    <h1>Neo<span style={firstHeading}>SCRUM</span></h1>
                    <label ref={greetingForLogin} style={{color:"red", display:"none"}}>welcome </label>
                </div>

                <form onSubmit={handleSubmit}>

                {!loading?
                    <div style={formBox}>

                        <div  style={{margin:"10px 0px"}}>
                            <h2>Login</h2>
                        </div>
 
                        <div style={{margin:"20px 23px 10px 24px"}}>
                            <input ref={emailRef} style={emailField} type="text" name="email" placeholder="Email*" value={values.email} onChange={handleChange} onBlur={handleEmailBlur}/>
                            <label ref={emailLabeleReqRef} style={{color:"red", display:"none",float:"left"}}>&nbsp;&nbsp;&nbsp;&nbsp;**Email Required</label> 
                            <label ref={emailLabeleProperRef}style={{color:"red", display:"none"}}>**Please Enter Proper Email id</label> 
                        </div>

                        <div style={{margin:"20px 23px 10px 24px"}}>
                            <input ref={passwordRef} style={passwordField} type="password" name="password" placeholder="Password*" value={values.password} onChange={handleChange} onBlur={handlePassBlur}/>
                            <label ref={passLabeleReqRef} style={{color:"red", display:"none",float:"left"}}>&nbsp;&nbsp;&nbsp;&nbsp;**password Required</label>
                            <label ref={passLabeleAlpaNumRef} style={{color:"red", display:"none"}}>**should contain Alpha Numeric no special chars</label>
                            <label ref={passLabeleLengthRef} style={{color:"red", display:"none"}}>**length between 8 and 13</label>  
                        </div>

                        <div>
                                <Button style={buttonStyle} variant="primary" onClick={clickHandler} type="submit">Login</Button>
                        </div>

                        <div style={{margin: "320px auto 0px", color:"blue"}}>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <div style={{fontSize:"17px",color:"blue"}}>Do not have account click here</div>
                        </Link>
                        <Link to="/forgetpassword" style={{textDecoration:"none"}}>
                            <div style={{fontSize:"17px",color:"blue",marginTop:"14px"}}>Forget Password click here</div>
                        </Link>
                        
                    </div>


                    </div>:<div style={{margin:"250px auto"}}><ReactBootStrap.Spinner size="lg" animation="border"/></div>}

                </form>
                {localStorage.token ? <Redirect to='/dashboard'/> :<Redirect to='/dashboard'/>}
                {!(localStorage.token) ? <Redirect to='/login'/> :<Redirect to='/dashboard'/>}
                {/* {login ? console.log("yes it does") :console.log("no some problem there") } */}

            </div>

        //     }

        //     {login ? <Redirect to='/dashboard'/> :<Redirect to='/dashboard'/>}
        //     {login ? console.log("yes it does") :console.log("no some problem there") }
        //     {/* {!(login) &&  <Redirect to='/registration'/>} */}

        // </div>
        )

}

export default LoginPage