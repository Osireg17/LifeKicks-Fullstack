import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import SignIn from './SignIn';
import Register from './Register';
import NotFound from './NotFound';
import Store from './Store';

const App = () => (
  <BrowserRouter>
    <Header/>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route element={<NotFound/>}/>
      </Routes>
    </main>
  </BrowserRouter>
)

export default App;
