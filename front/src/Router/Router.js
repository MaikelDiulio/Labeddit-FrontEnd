import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../pages/Login/Login"
import Post from '../pages/PostPage/Post'
import Cadastro from '../pages/Cadastro/Cadastro'
import Comments from '../pages/Comment/Comments'





function Router() {
    
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Login/>}/>
        <Route path='/signup' element={<Cadastro/>}/>
        <Route path='/posts' element={<Post/>}/>
        <Route path= "/comments/:id" element={<Comments/>}/>
        
    </Routes>
    </BrowserRouter>
  )
}

export default Router