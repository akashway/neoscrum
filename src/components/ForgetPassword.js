import React,{useState,useRef} from 'react'
import { Grid } from '@material-ui/core'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'



function ForgetPassword(){

    const [values,setValues]=useState({email:""})
    const emailRef=useRef(null)
    const emailLabeleReqRef=useRef(null)
    const emailLabeleProperRef=useRef(null)
    const regxEmail= new RegExp(/^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)

    const logo={
        fontSize:"25px",
        
    }

    const firstHeading={
        color:"red",
    }

    const buttonStyle={
        // backgroundColor:"rgb(123, 50, 168)",
        // color:"white",
        // padding:"13px",
        float:"left",
        marginLeft:"15px",
        // border:"1px solid rgb(123, 50, 168)",
        // borderRadius:"3px",
        marginTop:"30px",
        marginLeft:"230px"
       
    }


    const handleChange= (event) =>{
        console.log(event.target.name)
        console.log(event.target.value)

        setValues({ ...values,
            [event.target.name]:event.target.value
        });

    }

    // function clickHandler(){
    //     if(values.email){
    //     alert("Further instruction send to you Email")
    //     }
    //     else{
    //     emailRef.current.style.display="block"}
        
    // }

    function validationLogin() {

        if(values.email===""){
            emailRef.current.style.border="2px solid red"
            emailLabeleReqRef.current.style.display="block"
        }

        if(values.email){
            if((regxEmail.test(values.email))===true){
                alert("further instruction send to your email")
                setValues("")
            }

        }
    }

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

    return(


        <Grid container justify="center" style={{marginTop:"100px"}}>
                <Card className="text-center" style={{ width: '40rem' }} border="secondary">
                    <Card.Header>
                    <div style={logo}>
                        <h1>Neo<span style={firstHeading}>SCRUM</span></h1>
                    </div>
                    </Card.Header>
                        <Card.Body>
                            <Card.Title>Enter Email</Card.Title>
                            <div><input value={values.email} ref={emailRef} name="email" type="email" onChange={handleChange} onBlur={handleEmailBlur} /></div>
                            <label ref={emailLabeleReqRef} style={{color:"red", display:"none"}}>**Email Required</label> 
                            <label ref={emailLabeleProperRef}style={{color:"red", display:"none"}}>**Please Enter Proper Email</label> 
                            <Button style={{marginTop:"20px"}} variant="primary" onClick={validationLogin}>Submit</Button>
                            <Link to="/login" style={{textDecoration:"none"}}>
                                <div style={{fontSize:"17px",color:"blue",marginTop:"10px"}}>Click here to login</div>
                            </Link>
                        </Card.Body>
                    <Card.Footer className="text-muted">© 1996-2020,neoscrum.com</Card.Footer>
                </Card>

            </Grid>

    //      <div style={{backgroundColor:"white",border:"1px solid black",width:"500px",height:"300px",marginTop:"80px",marginLeft:"400px"}}>
    //     <div style={{marginTop:"40px"}}>
    //         <label style={{font:"bold",fontSize:"20px"}}>Enter Email</label>
    //         <div><input style={{padding:"7px 50px 7px 50px",marginTop:"30px"}} value={values.email} name="email" onChange={handleChange} type="email" /></div>
    //         <label ref={emailRef} style={{color:"red", display:"none"}}>&nbsp;&nbsp;&nbsp;&nbsp;**Email Required</label>
    //         <button onClick={clickHandler} style={buttonStyle}>Submit</button>
    //     </div>
    // </div>

    )

}

export default ForgetPassword