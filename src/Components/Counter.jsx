import React, { useState } from "react"
import { useContext } from "react"
import { countContext } from "../Contexts/count"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "../reducers/counterSlice"
function Counter(){
    // const [count,setCount]=useState(0)

    // let count=0
    // function increment(){
    //     console.log("incremented")
    //     setCount(count+1)
    //     // setCount((prev)=>prev+1)//for accessing previous value
    //     // count=count+1
    //     // console.log(count)
    
//     function decrement(){
// if(count<=0)
// console.log("cant be decremented")
// if(count>0)
//     console.log("decremented") 
//  return setCount(count-1)
       
//     }
//    const {count,countTheme}=useContext (countContext) 
// const { increment } = useContext(CounterContext)
const count = useSelector ((state)=> state.counter.count)
const dispatch = useDispatch()
const [val,setVal]=useState()
function handleValChange(e){
    setVal(e.target.value)
}
const handleIncrement = () =>{
    if(val){
        dispatch(incrementByValue(parseInt(val)))
    }
    else{
        dispatch(increment())

    }
    
    
}
const handleDecrement = () =>{
    dispatch(decrement())
}


    return(
        <>
        {/* <div><h1>Counter component</h1></div> */}
        <p>Count : {count}</p>
        <input type="number" value={val} onChange={handleValChange} />
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>increment By vale</button>
        </>
    )
}
export default Counter