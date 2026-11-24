import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
// import User from './User'
import NotFound from './NotFound'
import PostDetails from './PostDetails'

const Dashboard = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    {/* <Route path='/user/:id' element={<User />} /> */}
                    <Route path='/post/:id' element={<PostDetails/>} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Dashboard