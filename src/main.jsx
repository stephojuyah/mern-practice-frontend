import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'

// import Register from './pages/register/Register.jsx'
import Login from './pages/login/Login.jsx'
// import Forgot from './pages/forgot/Forgot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <Register /> */}
    <Login />
    {/* <Forgot /> */}


     {/* <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Forgot />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<Forgot />} />
      </Routes>   
    </BrowserRouter> */}
  </StrictMode>,
)
