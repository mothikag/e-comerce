import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './Components/Counter.jsx'
import About from './Components/About.jsx'
import Products from './Components/Products.jsx'
import Home from './Components/Home.jsx'
import Cart from './Components/Cart.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<App/>}>
      <Route path='/about' element={<About/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product' element={<Products/>}/>
     </Route>
      {/* <Route path='/counter' element={<Counter/>}/> */}
      </Routes>
      </BrowserRouter>
   
    </Provider>
  </React.StrictMode>,
)
