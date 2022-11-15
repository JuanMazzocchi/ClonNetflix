import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../features/login/Login'
import Layout from '../Layout/Layout'
import ProtectedRoutes from './ProtectedRoutes'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<ProtectedRoutes>
                <Routes>
                    <Route  path="/principal" element={<Layout />}  />
                   
                </Routes>
            </ProtectedRoutes>} />
            <Route path='/login' element={<Login />} />

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes