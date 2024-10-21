import React from 'react';
import Login from './users/Login';
import Signup from './users/Signup';
import Cardmain from './component/card'
import Dashbord from './component/dashbord';
import { Route, Routes } from 'react-router-dom';
import Homepage from './homepage/homepage';

function Mainparent(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashbord' element={<Dashbord />}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/card' element={<Cardmain />}/>
      </Routes>
    </div>
  );
}

export default Mainparent ;