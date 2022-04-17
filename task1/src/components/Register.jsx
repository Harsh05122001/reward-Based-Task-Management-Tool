import  React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import Header from "./Header";

function Register(){
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const dispatch = useDispatch();
    function handleClick(e){
        e.preventDefault();
        register(dispatch,{username,email,password});
    }

    return (
        <div>
        <Header></Header>
        <div className="container1">
            <div className="Heading">
            <h1>Sign Up!</h1>
            </div>
           
            <form className="Form">
            <input className = "Username" type= "name" placeholder="Username" onChange = {(e)=>{setUsername(e.target.value)}}/>
            <input className = "email" type= "email" placeholder="Email" onChange = {(e)=>{setEmail(e.target.value)}}/>
            <input className  = "password" type = "password" placeholder="Password"onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={(e)=>handleClick(e)} className="RegisterButton">Register</button>
            </form>
            
        </div>
        </div>
    );
}
export default Register;