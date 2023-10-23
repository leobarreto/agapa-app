import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './components/menu';
import Header from './components/header/';
import Home from './components/home/';
import Pet from './components/register/pet';
import TempHome from './components/register/temp-home';
import VetClinic from './components/register/vet-clinic';
import Volunteers from './components/register/volunteers';
import Farmings from './components/register/farmings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register/pet' element={<Pet />} />
        <Route path='/register/temp-home' element={<TempHome />} />
        <Route path='/register/vet-clinic' element={<VetClinic />} />
        <Route path='/register/volunteers' element={<Volunteers />} />
        <Route path='/register/farmings' element={<Farmings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
