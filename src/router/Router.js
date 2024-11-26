import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../page/home'
import LoginPage from '../page/Login'
import Signup from '../page/SingUp'
import ForgetPass from '../page/ForgetPass'


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Home />} />
                <Route path='/Login' element={< LoginPage />} />
                <Route path='/Cadastra' element={< Signup />} />
                <Route path='/Forgotpassword' element={< ForgetPass />} />

                <Route path='*' element={< Home />} />
            </Routes>
        </BrowserRouter>
    )
}