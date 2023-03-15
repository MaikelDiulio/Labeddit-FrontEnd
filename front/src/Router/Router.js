import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../pages/Cadastro/Cadastro'
import Feed from '../pages/Feed/Feed'
import ForumPost from '../pages/ForumPost/ForumPost'
import Login from '../pages/Login/Login'


function Router() {
    
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Login/>}/>
        <Route path='/signup' element={<Cadastro/>}/>
        <Route path='/posts/:id' element={<Feed/>}/>
        <Route path='/comments/:id' element={<ForumPost/>}/>
        
    </Routes>
    </BrowserRouter>
  )
}

export default Router