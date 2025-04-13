import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
 
 const App = () => {
   return (
     <div>
       <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
       </Routes>
     </div>
   )
 }
 
 export default App