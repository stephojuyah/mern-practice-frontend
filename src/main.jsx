import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'

import Register from './pages/register/Register.jsx'
import Login from './pages/login/Login.jsx'
import RequestReset from './pages/request_reset/RequestReset.jsx'
// import ResetPassword from './pages/reset_password/ResetPassword.jsx'
import Home from './pages/home/Home.jsx'
// import Dash from './pages/dashboard/Dash.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <Register /> */}
    {/* <Login /> */}
    {/* <RequestReset /> */}
    {/* <ResetPassword /> */}
    {/* <Home /> */}
    {/* <Dash /> */}


     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/home' element={<Dash />} /> */}
        <Route path='/request_otp' element={<RequestReset />} />
        {/* <Route path='/reset_password' element={<ResetPassword />} /> */}
      </Routes>   
    </BrowserRouter>
  </StrictMode>,
)
