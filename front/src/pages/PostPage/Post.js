import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import commentsIco from '../../assets/img/commentsIco.png';
import likeIco from '../../assets/img/likeIco.png';
import postar from '../../assets/img/postar.png';
import dislikeIco from '../../assets/img/deslikeIco.png';
import { BoxInteraction, ContainerPost } from './Post.styled';
import Header from '../../Components/Header/Header';
import { BASE_URL } from '../../Constants/url';
import PostCard from '../../Components/PostCard/PostCard';
import { goToComments } from '../../Router/Cordinates';


const Post = () => {
  const navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [content, setContent] = useState("")
  const [comments, setComments] = useState("")
  const token = window.localStorage.getItem("token")
  useEffect(() => {
    getAllPosts()
    getComments()
  }, [])



  const getAllPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: token
        }
      })
      setPosts(response.data)

    } catch (error) {
      console.log(error)
    }
  }


  const getComments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/comments`, {
        headers: {
          Authorization: token
        }
      })
      setComments(response.data)

    } catch (error) {
      console.log(error)

    }
  }



  const createPost = async () => {
    const postBody = { content: content }

    try {
      await axios.post(`${BASE_URL}/posts`, postBody, {
        headers: {
          Authorization: token
        }
      })
      getAllPosts()
      setContent("")

    } catch (error) {
      console.log(error)
      alert("não foi possivel criar o post.")
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

  return (
    <>
      <Header />
      <ContainerPost>

        <div className='box-input'>
          <input
            type='content'
            placeholder='Escreva seu post...'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button onClick={createPost}><img src={postar} /></button>

        </div>
        {posts.map((post) => {

          console.log(posts)
          return (

            <BoxInteraction key={post.id}>

              <p>Enviado por: {post.creator.name}</p>
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
          )
        })}
      </ContainerPost>



    </>
  )
}


export default Post