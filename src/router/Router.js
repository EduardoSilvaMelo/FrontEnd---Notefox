import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../page/home'
import LoginPage from '../page/Login'


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Home />} />
                <Route path='/Login' element={< LoginPage />} />
                
                <Route path='*' element={< Home />} />
            </Routes>
        </BrowserRouter>
    )
}