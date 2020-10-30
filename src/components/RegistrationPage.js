import React,{ useState, useRef,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router';

//Registration Functional Component
/**
 * @author Akash Mishra
 * @requires Parent App Components
 * @description Create a basic Registration page with two input and submit button.API is called to validate all input field credential
 * @returns Two Input Fields.Also return API links result in order to proper navigation between all pages off APP
 */


function RegistrationPage(){

    // const {handleChange,handleSubmit,values}=useForm(submit)

    // function submit(){
    //     console.log("submited succesfully")
    // }

    const employeeNameRef= useRef(null)
    const employeeLabeleSpcRef=useRef(null)
    const employeeLabeleReqRef=useRef(null)
    const emailRef=useRef(null)
    const emailLabeleReqRef=useRef(null)
    const emailLabeleProperRef=useRef(null)
    const employeeLabeleNumericRef=useRef(null)
    // const regxname="/^[0-9]+$/"
    const regxname = new RegExp("^(?=.*[0-9])")
    const regxEmail= new RegExp(/^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
    const regxPasswoord=new RegExp("^(?=.*[!@#$%^&*])")
    const [status,setStatus]=useState(false)
    const [greet,setGreet]=useState(false)
    const [loginpage,setloginPage]=useState(false)

/**
 * @requires Registration Page Function 
 * @description Validate the feilds.There is proper email and name should be entered using validation function
 * @returns CSS Styles which need to change on entering unaccepected details.
 */ 
    function validation() {

        if(values.employeeName===""){
            employeeNameRef.current.style.border="2px solid red"
            employeeLabeleReqRef.current.style.display="block"
        }

        if(values.email===""){
            emailRef.current.style.border="2px solid red"
            emailLabeleReqRef.current.style.display="block"
        }


        // employeeNameRef.current.style.border="2px solid red"
    }

/**
 * @requires Registration Page Function 
 * @description Validate the Name feild using Blur.There is proper email and name should be entered using Blur validation function
 * @returns CSS Styles which need to change on entering unaccepected details.
 */ 

    function handleNameBlur() {

        if(values.employeeName===""){
            employeeNameRef.current.style.border="2px solid red"
            employeeLabeleReqRef.current.style.display="block"
            employeeLabeleSpcRef.current.style.display="none"
            employeeLabeleNumericRef.current.style.display="none"
        }

        else if(regxname.test(values.employeeName)){
            employeeLabeleNumericRef.current.style.display="block"
            employeeLabeleSpcRef.current.style.display="none"
            employeeLabeleReqRef.current.style.display="none"
        }

        else if(regxPasswoord.test(values.employeeName)){
            employeeLabeleSpcRef.current.style.display="block"
            employeeLabeleNumericRef.current.style.display="none"
            employeeLabeleReqRef.current.style.display="none"

        }

        else{
            employeeNameRef.current.style.border="0.5px solid black"
            employeeLabeleNumericRef.current.style.display="none"
            employeeLabeleReqRef.current.style.display="none"
        }
    
    }

/**
 * @requires Registration Page Function 
 * @description Validate the Email feild using Blur.There is proper email and name should be entered using Blur validation function
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

        else if(newRegistration.user_email===localStorage.email){
            setStatus(true)
        }

        else if(newRegistration.user_email!==localStorage.email){
            setStatus(false)
        }

        else{
            emailRef.current.style.border="0.5px solid black"
            emailLabeleProperRef.current.style.display="none"
            emailLabeleReqRef.current.style.display="none"
        }

    }

    console.log(localStorage.token)
    console.log(localStorage.email)

    // const logo={
    //     padding:"60px 60px 50px 60px",
    //     fontSize:"25px"
    // }

    const logo={
        position:"fixed",
        padding:"60px 60px 50px 45px",
        fontSize:"25px",
        marginBottom:"50px",
        left:"490px"
    }

    const firstHeading={
        color:"red",
    }

    // const formBox={

    //     border:"1px solid rgb(209, 240, 235)",
    //     width:"260px",
    //     height:"370px",
    //     marginLeft:"555px",
    //     borderBottom: "1px solid rgb(76, 82, 80)",


    // } 

    const formBox={
        position:"fixed",
        border:"1px solid rgb(209, 240, 235)",
        width:"242px",
        height:"358px",
        marginLeft:"555px",
        borderBottom: "1px solid rgb(76, 82, 80)",
        top:"200px"


    } 

    const employeeNameField={
        margin:"20px 20px 5px 22px",
        float:"left",
        padding:"10px",
        borderBottom: "1px solid rgb(76, 82, 80)",
        borderLeft: "3px solid white",
        borderRight: "3px solid white",
        borderTop: "3px solid white"
    }

    const emailField={
        margin:"8px 20px 5px 22px",
        float:"left",
        padding:"10px",
        borderBottom: "1px solid rgb(76, 82, 80)",
        borderLeft: "3px solid white",
        borderRight: "3px solid white",
        borderTop: "3px solid white"
    }

    const buttonStyle={
        backgroundColor:"rgb(123, 50, 168)",
        color:"white",
        padding:"13px",
        float:"left",
        marginLeft:"15px",
        border:"1px solid rgb(123, 50, 168)",
        borderRadius:"3px",
        marginTop:"60px",
        marginLeft:"80px",
        marginBottom:"0px"
    }

   


    const [values,setValues]=useState({employeeName:"",email:""})

    const handleChange= (event) =>{
        
        setValues({...values,
            [event.target.name]:event.target.value
        });

    }

    const newRegistration={

        user_name:values.employeeName,
        user_email:values.email
    };

/**
 * @requires Registration Page Function 
 * @description On Submit function validate the field and it also establishing API connection on Login
 * @returns Successful or Unsuccessful API Connection
 */ 

    const handleSubmit=(event) =>{
        event.preventDefault()
        validation()
        console.log(newRegistration)
        // console.log(newRegistration.user_name)
        // console.log(newRegistration.user_email)
        console.log(newRegistration)
        console.log(newRegistration.user_name)
        console.log(newRegistration.user_email)

        if(values.email && values.employeeName){
            axios.post("http://180.149.241.208:3047/registration",newRegistration)

            .then( response =>{
                console.log(response)
                localStorage.setItem("fistUser",response.data.message)
            }
            )

            .catch(error =>{
                console.log(error)
            }
            )
            
        }

        if(values.email && values.employeeName ){

            console.log(localStorage.getItem("fistUser"))
            setGreet(true)
            setloginPage(true)
        }
    }

    // const handleBlur =(event) =>{
    //     if(values.employeeName===""){
    //         alert("Enter value")
    //     }

    //     if(values.employeeName.length<8){
    //         alert("value is less than 10")
    //     }

    // }

    // const borderField="2px solid black";
    // const [border,setBorder]=useState(borderField);
    // const [title, setEmployeeName] = useState('')


    // function employeeNameHandler(){
    //     const newBorder="2px solid red"
    //     setBorder(newBorder)

    // }


    // useEffect(()=>{

    //         if(localStorage.token)
    //         {
    //             axios.post("http://180.149.241.208:3047/registration",newRegistration)

    //             .then( response =>{
    //                 console.log(response)
    //             })

    //         }

    // },[])

        return(
            <div>

                <div style={logo}>
                    <h1>Neo<span style={firstHeading}>SCRUM</span></h1>
                </div>

                <form onSubmit={handleSubmit}>

                    <div style={formBox}>
                        <div style={{marginBottom:"10px"}}>
                            <h3>Enter New Developer</h3>
                        </div>

                        <div>
                            <input ref={employeeNameRef} style={employeeNameField} type="text" name="employeeName" placeholder="Employee Name*" value={values.employeeName} onChange={handleChange} onBlur={handleNameBlur} />
                            <label ref={employeeLabeleReqRef} style={{color:"red", display:"none"}}>**Employee Name Required</label> 
                            <label ref={employeeLabeleNumericRef} style={{color:"red", display:"none"}}>**Numeric number not required</label>
                            <label ref={employeeLabeleSpcRef} style={{color:"red", display:"none"}}>**No special character req.</label> 
                        </div>

                        <div>
                            <input ref={emailRef} style={emailField} type="text" name="email" placeholder="Email*" value={values.email} onChange={handleChange} onBlur={handleEmailBlur}/>
                            <label ref={emailLabeleReqRef}style={{color:"red",display:"none",float:"left"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Email Required</label> 
                            <label ref={emailLabeleProperRef}style={{color:"red", display:"none",float:"left"}}>**Please Enter Proper Email id</label> 
                        </div>

                        {/* <div style={{position:"relative",top:"20px",left:"30px"}}>
                            <input type="file" />
                        </div> */}

                            <div style={{position:"relative", top:"30px",left:"30px"}}>
                            <input type="file" id="myFile" name="filename"></input>
                        </div>

                        <div>
                            {/* <Link to='/login'> */}
                            <button style={buttonStyle} type="submit">Submit</button>
                            {/* </Link> */}
                        </div>

                        <div style={{position:"fixed",top:"525px",left:"565px"}}>
                            <Link to="/login" style={{textDecoration:"none"}}>
                                <span >Already have account click here</span>
                            </Link>
                        </div>
                    </div>

                    {status ? alert("You Already Register with us "):null}
                    {status ? <Redirect to='/login'/>:null}
                    {greet ?  alert(localStorage.getItem("fistUser")):null}
                    {loginpage ?  <Redirect to='/login'/>:null}

                </form>

                

            </div>
        )

}

export default RegistrationPage