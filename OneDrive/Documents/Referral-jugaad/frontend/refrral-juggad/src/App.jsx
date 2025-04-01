import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import MentorProfile from './Pages/mentorProfile'
import SignUp from './Pages/Signup'
import Login from './Pages/Login'
import Messege from './Pages/messege'
 
 

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentorprofile/:mentorId" element={<MentorProfile />} />
          
           <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/messege/:id" element={<Messege />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
