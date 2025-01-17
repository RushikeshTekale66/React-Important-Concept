import React, { useState } from 'react';

const Login = () => {

    const [formData, setFormData] = useState({
        name : '',
        email : ''
    })


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData.name);
        
        alert(`Name : ${formData.name} & Email : ${formData.email}`)
    }
    const handleChange = (e)=>{
        const {name , value} = e.target;
        setFormData({...formData, [name]:value});
    }

    return (
        <>
           <form onSubmit={handleSubmit}>
                Name : <input type='text' name='name' value={formData.name} onChange={handleChange}/><br/>
                Email : <input type='text' name='email' value={formData.email} onChange={handleChange}/><br/>
                <button type='submit' className='btn btn-success m-1'>Submit</button>
           </form>
        </>
    )
}

export default Login;