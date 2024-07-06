import React, { useEffect, useState } from "react"
import Header from './Components/Header'
import './App.css'
import { ThemeContext } from "./Contexts/theme"
import Product from "./Components/Products"
import { countContext } from "./Contexts/count"
import Counter from "./Components/Counter"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './Components/Home'
// import Body from "./components/Body"
// import Counter from "./components/Counter"
// import Calculator from "./components/Calculator"
// function App() {
//   const names="Mothi"
//   const age=22
//   const ht=169
//   const dept="Msc"
  
//   return (
//     <>
    
//      <div>App component</div>
//    {/* <Body names={names} age={age} ht={ht} dept={dept}/>
//    <Counter/> */}
//     <Calculator/> 
//     </>
//   )
// }
// // const App=()=>{
// //   return (
// //   <div>App component</div>
// //   )
// //   }
  
function App(){
const[theme,setTheme]=useState("Light");
const[count,setCount]=useState(0);

  //No dependency array
  
  
  function toggleTheme(){
    setTheme(theme==='Light'?'Dark':'Light')
    setCount(count+1);
  }
  function increment(){
    setCount(count+1)
  }
  useEffect(()=>{
    document.body.className=theme
  },[theme]);
  return(
    <>
    
    <ThemeContext.Provider value={{theme:theme,toggleTheme:toggleTheme}}>
    <countContext.Provider value={{count:count,increment:increment}}>
    <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
          </Routes>
    {/* <Counter/> */}
    <Outlet/>
    <ToastContainer></ToastContainer>
    </countContext.Provider>
    </ThemeContext.Provider>
    
    {/* <Product/> */}

    {/* <countContext.Provider value={{count:count,countTheme:increment}}>
    <Counter />
    </countContext.Provider> */}
    </>
  )
}
export default App

