import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './compnanat/RegisterPage'
import Home from './compnanat/Home'
import Notpage from './compnanat/Notpage'

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path="/Register" element={<RegisterPage />}></Route>
                    <Route path="*" element={<Notpage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
        // <RegisterPage />
    )
}
