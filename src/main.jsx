import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router' 
import RegistrationCompleted from './RegistrationCompleted.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/RegistrationCompleted' element={<RegistrationCompleted/>}/>
    
    </Routes>
    <Toaster/>
  </BrowserRouter>
)
