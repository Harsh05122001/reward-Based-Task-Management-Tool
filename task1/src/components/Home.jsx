import Header from "./Header";
import { useState } from "react";
import DisplayTask from "./DisplayTask";

function Home(){
    const [task,setTask] = useState("");
  const [tasks,setTasks] = useState([]);
  const [edit,setedit] = useState(false);
  const [i,seti]  = useState("");

  var count = 0;
  
  function handleChange(event){

    const value = event.target.value;
    setTask(value);
  }
  function submitTask(event){
    
    setTasks(prevItems =>{
      return [...prevItems,task];
  });
    setTask("");
    
    event.preventDefault();
  }
  function deleteItem(id){
    setTasks(prevItems =>{
      return prevItems.filter((item,index)=>{
        return index!==id;
      })
    })

  }
  function handleedit(id){
    setedit(true);
    seti(id);
  }
  function UpdateTask(event){
    tasks[i] = task;
    setedit(false);
    seti("");
    setTask("");
    event.preventDefault();
   
  }
  function handleCheckbox(check){
    if(check === true){
      count++;
    }else{
      count--;
    }
  }
    return(
        <div>
    <Header />
   
    <div className="container1">
      <h1>What's The Plan for today?</h1>
      <p className="total">Total Task For Today </p>
      
      <p className="array">{tasks.length}</p>
      
      

      <form>
      {edit ? (<div className="input-group mb-3 inner">
        
        <input value = {task} onChange = {handleChange} type="text" class="form-control" placeholder="Update The Task" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button onClick={UpdateTask} class="btn btn-outline-secondary" type="submit">Update</button>
          </div>
         
    </div>): (<div className="input-group mb-3 inner">
        
        <input value = {task} onChange = {handleChange} type="text" class="form-control" placeholder="Add a new Task" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button onClick={submitTask} class="btn btn-outline-secondary" type="submit">Add</button>
          </div>
         
    </div>)}
        
      </form> 
        <div>
          {tasks.map((item,index) =>(
            <DisplayTask  checker = {handleCheckbox} key = {index} id = {index} text = {item} deleteItem = {deleteItem} updateItem = {handleedit} />
          ))}
          
        </div>
       
    </div>
    </div>
    )
};
export default Home;