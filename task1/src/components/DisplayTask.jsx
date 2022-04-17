import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {updatereward} from "../redux/apiCalls";
function DisplayTask(props){
    const [checkbox,setcheck] = useState(false);
    const user = useSelector(state=>state.user.currentUser);
    console.log(user);
    const dispatch = useDispatch();
    
    function handleCheckbox(e){
        console.log(e);
        if(e.target.checked === true){
            
            dispatch(updatereward(dispatch,user));
            props.deleteItem(props.id);

        }
      }
    
    
    
    return (    
        <div className="task" >
        
        <p><input  onClick={() =>{props.deleteItem(props.id)}} onChange={handleCheckbox} defaultChecked = {checkbox} className = "check checkbox" type="checkbox"/>{props.text} <i onClick={() =>{props.deleteItem(props.id)}} className="fa fa-trash-o icon"></i><i onClick={()=>{props.updateItem(props.id)}} className="fa fa-edit icon"></i></p>
       </div>
    );

}
export default DisplayTask;