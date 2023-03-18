import React, { useState } from 'react'
import axios from "axios";
import Header from '../../Components/Header/Header'
import { ContainerPost } from './Post.styled'
import buttomPostar from "../../assets/img/postar.png"

function Post() {

  // const [post, setPost] = useState()

  // const GetPost = () ->{

  // }

  return (
    <>
    <Header/>

    <ContainerPost>
      <div className='box-input'>

      <label>
        <input
        placeholder='Escreva seu post...'
        // value={post}

        ></input>
      </label>
      <button><img src={buttomPostar} alt=""/></button>

      </div>
    </ContainerPost>
    
    </>
  )
}

export default Post