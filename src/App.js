import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import LandingPage from './components/Pages/LandingPage'
import LoginPage from './components/Pages/LoginPage'
import RegisterPage from './components/Pages/RegisterPage'
import ForgetPasswordPage from './components/Pages/ForgetPasswordPage'
import HomePage from './components/Pages/HomePage'
import Header from './components/Pages/Header'
import './App.css'
export default function App() {
    return (
    <>
    <>
    <Header/>
    
    </>
  
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage />} />
                    <Route path="/forget-password" element={ <ForgetPasswordPage />} />
                    <Route path="/home" element={< HomePage/> } />
            "
                </Routes>
            </div>
        </Router>
        </>
    )
}