/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignIn from '../pages/SignIn'
import RouteGuard from '../components/RouteGuard'

const Path = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<RouteGuard><Home/></RouteGuard>} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/Sign-in' element={<SignIn/>}/>
            </Routes>
        </div>
    )
}

export default Path
