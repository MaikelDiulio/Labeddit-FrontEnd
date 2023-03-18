import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../pages/Cadastro/Cadastro'
import Post from '../pages/PostPage/Post'
import Comment from '../pages/Comment/Comment'
import Login from '../pages/Login/Login'


function Router() {
    
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Login/>}/>
        <Route path='/signup' element={<Cadastro/>}/>
        <Route path='/posts/:id' element={<Post/>}/>
        <Route path='/comments/:id' element={<Comment/>}/>
        
    </Routes>
    </BrowserRouter>
  )
}

export default Router