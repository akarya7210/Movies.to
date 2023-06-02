import './App.css';
import React from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Shows from './components/Shows';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Summary from './components/Summary';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar About ="AboutUs"/>
    <Routes>
      <Route exact path='/' element={<Shows/>}/>
      <Route exact path='/summary' element ={<Summary text="working with this..!"/>}/>
      <Route exact path='/booktickets' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
