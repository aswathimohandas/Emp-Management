import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './bootstrap.min.css'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
      
    </>
  )
}

export default App
