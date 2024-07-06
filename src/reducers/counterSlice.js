import { createSlice } from "@reduxjs/toolkit";
/// three keys
const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count: 0
    },
    // reducers oda actions 
    reducers:{ // thevayana actions 
        increment:(state) =>{
            state.count += 1
        },
        incrementByValue: (state,action)=>{
            state.count += action.payload
        },
        decrement:(state) =>{
            state.count -=1
        }
    }
})
// destructring panni export panrom
export const {increment,decrement,incrementByValue}=counterSlice.actions

// explicit ah export pannalam
export default counterSlice.reducer