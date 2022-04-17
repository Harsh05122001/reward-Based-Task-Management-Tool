import {loginStart,loginFailure, loginSuccess} from "./userRedux";
import {publicRequest} from "../requestMethods";
import { leaderboardFailure, leaderboardSuccess } from "./leaderboardRedux";
export const login = async (dispatch,user)=>{

    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user);
        
        dispatch(loginSuccess(res.data));

    }catch(err){
        dispatch(loginFailure());

    }
}
export const register = async(dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res  = await publicRequest.post("/auth/register",user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        
        dispatch(loginFailure());
    }
}
export const updatereward = async(dispatch,user)=>{
    
    try{
        console.log(user);
        const res = await publicRequest.put("/user/"+user._id,user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}
export const leaderboard = async(dispatch)=>{
    try{
        const res = await publicRequest.get("/user/");
        console.log(res);
        dispatch(leaderboardSuccess(res.data));
    }catch(err){
        console.log(err.message);
        dispatch(leaderboardFailure());
    }
}