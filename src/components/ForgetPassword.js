import React,{useState,useRef} from 'react'


function ForgetPassword(){

    const [values,setValues]=useState({email:""})
    const emailRef= useRef(null)

    const buttonStyle={
        backgroundColor:"rgb(123, 50, 168)",
        color:"white",
        padding:"13px",
        float:"left",
        marginLeft:"15px",
        border:"1px solid rgb(123, 50, 168)",
        borderRadius:"3px",
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

    function clickHandler(){
        if(values.email){
        alert("Further instruction send to you Email")
        }
        else{
        emailRef.current.style.display="block"}
        
    }

    return( <div style={{backgroundColor:"white",border:"1px solid black",width:"500px",height:"300px",marginTop:"80px",marginLeft:"400px"}}>
        <div style={{marginTop:"40px"}}>
            <label style={{font:"bold",fontSize:"20px"}}>Enter Email</label>
            <div><input style={{padding:"7px 50px 7px 50px",marginTop:"30px"}} value={values.email} name="email" onChange={handleChange} type="email" /></div>
            <label ref={emailRef} style={{color:"red", display:"none"}}>&nbsp;&nbsp;&nbsp;&nbsp;**Email Required</label>
            <button onClick={clickHandler} style={buttonStyle}>Submit</button>
        </div>
    </div>

    )

}

export default ForgetPassword