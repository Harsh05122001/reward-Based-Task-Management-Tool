import React,{useState} from  "react";
import DisplayTask from "./DisplayTask";
import Login from "./Login";
import Header from "./Header";
import Register from "./Register";
import Leaderboard from "./LeaderBoard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
  Navigate
} from "react-router-dom";
import Home from "./Home";
import { useSelector } from "react-redux";
function App(){
  
  const user  = useSelector(state=>state.user.currentUser);

  console.log("Users"+JSON.stringify(user));
  
  
  
  return(
    <Router>
      <Routes>
      <Route path ="/" element = {<Home/>}/>
      </Routes>
      <Routes>
      <Route path ="/register" element = { user?<Navigate to ="/"/>:<Register/>}/>
      </Routes>
      <Routes>
      <Route path = "/login" element= { user?<Navigate to ="/"/>:<Login/>} />
      </Routes>
      <Routes>
      <Route path = "/leaderboard" element= { <Leaderboard/>} />
      </Routes>
    </Router>
    
    
  );
}
export default App;
