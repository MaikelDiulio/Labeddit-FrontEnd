import React, { useState } from 'react'
import commentsIco from '../../assets/img/commentsIco.png';
import likeIco from '../../assets/img/likeIco.png';
import dislikeIco from '../../assets/img/deslikeIco.png';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Constants/url';
import axios from 'axios';
import { BoxInteraction } from './PostCard.styled';
import { goToComments } from '../../Router/Cordinates';


function PostCard() {
  

  const navigate = useNavigate()
  const [postId, setPostId] = useState([])


  const getAllPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      setPostId(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  const likeOrDislike = (id, likeDislike) => {

    const input = {
      "like": likeDislike

    }
    const token = window.localStorage.getItem('token')

    axios.put(`${BASE_URL}/posts/${id}/like`, input, {
      headers: {
        'Authorization': token
      }

    })
      .then((res) => {
        console.log(res)
        getAllPosts()

      })

      .catch((err) => {
        console.log(err)

      })

  }




  

  // console.log(post, "aaaAAAAAAAAAAAAA")
  return (
    <>
    
    
    {postId.map((post) => {
      <BoxInteraction key={postId.id}>
        
      <p>Enviado por: {post.creator.nickname}</p>
      <ul>{post.content}</ul>
      <ul>{post.comments}</ul>
      <div className='box-segments'>
        <button onClick={() => goToComments(navigate, post.id)}>
          <img src={commentsIco} />
        </button>
        <ul>{post.likes}</ul>
        <button onClick={() => likeOrDislike(post.id, true)}>
          <img src={likeIco} />
        </button>
        <ul>{post.dislikes}</ul>
        <button onClick={() => likeOrDislike(post.id, false)}>
          <img src={dislikeIco} />
        </button>

      </div>
    </BoxInteraction>
    })}
    </>
  )
}




export default PostCard