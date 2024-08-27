
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Componets/Nanvar';
import Product from './Componets/Product';
import Cart from './Componets/Cart';
import { useEffect } from 'react';
import { GetProductAPI } from './features/API/GetApi';
import { useDispatch } from 'react-redux';
import About from './Componets/About';
import NewTodo from './Componets/NewTodo';



function App() {
const dispatch =useDispatch()
  useEffect(()=>{

    dispatch(GetProductAPI())
        

 
   
  },[dispatch])

  return (
    <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/"  element={<Product/>}/> 
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/signin"  element={<NewTodo/>}/>

      </Routes>
 

    </div>
  );
}

export default App;
