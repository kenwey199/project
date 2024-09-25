import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './compnanat/RegisterPage'
import Home from './compnanat/Home'
import Notpage from './compnanat/Notpage'
import LoginPage from './compnanat/LoginPage'

export default function App() {
    
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="Login" element={<LoginPage />} />
                        <Route path="Register" element={<RegisterPage />} />
                        <Route path="*" element={<Notpage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
