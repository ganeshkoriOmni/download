import { useState, useContext } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/OmniLogo.png';

import { UserContext } from './Contexts/UserContext'
import LoginPage from './Pages/Login'
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register';
import Hybris from './Pages/Hybris';
import ForgotPassword from './Pages/ForgotPassword';
import Header from './Components/header';
import Softwares from './Pages/Softwares';
import Documents from './Pages/Documents';

function App() {
  const user = useContext(UserContext);
  console.log(import.meta.env)

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hybris" element={<Hybris />} />
          <Route path="/softwares" element={<Softwares />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>

      </BrowserRouter>
      

    </>
  )
}

export default App
