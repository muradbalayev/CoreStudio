import React from 'react'
import Home from './client/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp
