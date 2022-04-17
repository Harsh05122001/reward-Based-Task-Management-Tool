import {createSlice} from "@reduxjs/toolkit";
const leaderboardSlice = createSlice({
    name:"leaderboard",
    initialState:{
        AllUser:null,
        isFetching:false
    },
    reducers:{
        leaderboardStart:(state)=>{
            state.isFetching = true;
        },
        leaderboardSuccess:(state,action)=>{
            state.isFetching = false;
          
            state.AllUser  = action.payload;
            
        },
        leaderboardFailure:(state)=>{
            state.isFetching = false;
            console.log(state.error);
            state.error = true;
        }
    }
});

export const {leaderboardStart,leaderboardSuccess,leaderboardFailure} = leaderboardSlice.actions;
export default leaderboardSlice.reducer;