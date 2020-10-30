import { useState } from 'react'

function useForm(callback){
    const [values,setValues]=useState({employeeName:"",email:"",})

    const handleChange= (event) =>{
        console.log(event.target.name)
        console.log(event.target.value)

        setValues({
            [event.target.name]:event.target.value
        });

    }

    const handleSubmit=(event) =>{
        event.preventDefault();
        callback()
    }

    return(
        handleChange,
        handleSubmit,
        values
    )
}
export default useForm