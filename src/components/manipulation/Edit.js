import axios from "axios";
// import e from "express";
import React, {useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import {BrowserRouter as Router,Route} from 'react-dom';
const Edit =()=>{
    let history=useHistory();
    const {id}=useParams();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
});
const{name,username,email}=user; 

const onInputChange = name  => e =>{
    setUser({...user,[name]: e.target.value});
};

useEffect(()=>{
    loaduser();
},[]
);
const onsubmit =async e=>{
    e.preventDefault(); 
await axios.put(`http://localhost:3003/users/${id}`, user);
history.push("/");
};

const loaduser = async ()=>{
    const result = await axios.get(`http://localhost:3003/users/${id}`);
setUser(result.data);
};

return(
    <div className="container">
    <form onSubmit={e=>onsubmit(e)}>


<div className="form-group">
    <input 
    type="text"
    // className="form-control form-control-lg"
    placeholder="Enter Your Name"
    name="name"
    value={name}
    onChange={onInputChange("name")}
    />
    </div><br></br>
    <div className="form-group">
    <input 
    type="text"
    // className="form-control form-control-lg"
    placeholder="Enter Your UserName"
    name="username"
    value={username} 
    onChange={onInputChange("username")}
    />
    </div><br></br>
    <div className="form-group">
    <input 
    type='text'
    // className='form-control form-control-lg'
    placeholder='Enter Your email'
    name='email'
    value={email} 
    onChange={onInputChange("email")} 
    />
    </div><br></br>
    <button className="btn btn-primary btn-block">Update User</button>
    </form>
    </div>
);
};
export default Edit;