import  React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useSelector } from "react-redux";
import Header from "./Header";

function Login(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {isFetching,error} = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    function handleClick(e){
        e.preventDefault();
        console.log("Heyyy");
        login(dispatch,{username,password});

    }   

    return (
        <div>
        <Header></Header>
        <div className="container1">
            <div className="Heading">
            <h1>Welcome <br></br>Back!</h1>
            </div>
           
            <form className="Form">
            <input className = "Username" type= "text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
            <input className  = "password" type = "password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={(e)=>{handleClick(e)}}  disabled = {isFetching} className="LoginButton">Login</button>
            </form>
           
        </div>
        </div>
    );
} 
export default Login;