import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'

// import Register from './pages/register/Register.jsx'
// import Login from './pages/login/Login.jsx'
// import Forgot from './pages/forgot/Forgot.jsx'
import Home from './pages/home/Home.jsx'
// import Dash from './pages/dashboard/Dash.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <Register /> */}
    {/* <Login /> */}
    {/* <Forgot /> */}
    <Home />
    {/* <Dash /> */}


     {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dash />} />
        <Route path='/forgot' element={<Forgot />} />
      </Routes>   
    </BrowserRouter> */}
  </StrictMode>,
)
