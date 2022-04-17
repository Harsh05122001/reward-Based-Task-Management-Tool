import { useSelector } from "react-redux";
import { logout } from "../redux/userRedux";
import { useDispatch } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { leaderboard } from "../redux/apiCalls";
import { leaderboardSuccess } from "../redux/leaderboardRedux";
function Header(){
    const user = useSelector(state=>state.user.currentUser);
    console.log(JSON.stringify(user));
    const dispatch = useDispatch();
    function handleClick(){
        dispatch(logout());
    }
    function handleleaderboard(){
        leaderboard(dispatch)
    }
    
    return (
        
        <div className="heading">
            
            <Link to= "/"><h3>ToDoList</h3></Link>
            {!user&& <Link to ="/register"><h3 className="username"> To Compete,Signup</h3></Link>}
            {user && <h3 className="username">Hello,{user.username}</h3>}
            <div className="User">
                <Link to ="/leaderboard"><h3 className="register" onClick={handleleaderboard}>Leaderboard</h3></Link>
                {!user && <Link to ="/register"><h3 className="register">Register</h3></Link>}
                {!user && <Link to ="/login"><h3>Login</h3></Link>}
                {user && <h3 className="register">Points - {user.Reward}</h3>}
                {user && <button className="button-35" role="button" onClick={handleClick}>Logout</button>}

            </div>
           
            
            

        </div>
    )
}
export default Header;