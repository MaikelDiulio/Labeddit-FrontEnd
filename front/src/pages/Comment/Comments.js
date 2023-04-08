import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BoxInteraction, BoxPost, Button2, CommentsContainer, ContainerComments, FormComment } from "./Comments.styled";
import { goTOLogin } from "../../Router/Cordinates";
import CommentCard from "../../Components/CommentCard/CommentsCard";
import { BASE_URL, TOKEN_NAME } from "../../Constants/url";
import Post from "../PostPage/Post";
import Header from "../../Components/Header/Header";
import commentIco from "../../assets/img/commentsIco.png"
import Like from "../../assets/img/likeIco.png"
import dislike from "../../assets/img/deslikeIco.png"
import responder from "../../assets/img/responder.png"
import line from "../../assets/img/Line.png"





const Comments = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [postId, setPostId] = useState([]);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [dataComment, setDataComment] = useState([]);

  const token = window.localStorage.getItem("token");

  const createContent = {
    "content": commentContent
  }

  useEffect(() => {
    if (!token) {
      goTOLogin(navigate);
      return;
    }
    getPostById()
    getCommentsByPostId()


  }, []);

  const getPostById = () => {

    axios.get(`${BASE_URL}/posts/${id}`, {
      headers: {
        'Authorization': token
      }
    })
      .then((res) => {
        console.log(res)
        setPostId(res.data)
      })
      .catch((err) => {
        console.log(err)

      })
  }

  const likeOrDislike = async (id, like) => {
    try {
      await axios.put(`${BASE_URL}/posts/${id}/like`, { like }, {
        headers: { Authorization: token }
      });

      getPostById();

    } catch (error) {
      console.log(error);
    }
  }


  const createComments = async () => {
    if (commentContent.trim() === "") {
      alert('Por favor, adicione um comentário válido.')
      return
    }
    try {
      await axios.post(`${BASE_URL}/comments/${id}`, createContent, {
        headers: {
          Authorization: token
        }
      })

      window.location.reload()

    } catch (error) {
      console.log(error)
    }
  }


  const getCommentsByPostId = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/comments/post/${id}`, {
        headers: {
          "Authorization": token
        }
      })

      console.log(response.data)
      setDataComment(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  const likeOrDislikeComments = async (id, like) => {
    try {
      await axios.put(`${BASE_URL}/comments/${id}/like`, { like }, {
        headers: { Authorization: token }
      });

      getCommentsByPostId();

    } catch (error) {
      console(error)
    }
  }




  return (
    <>
      <Header />
      <ContainerComments>



        <BoxPost>

          <p>Enviado por: {postId.name}</p>
          <ul>{postId.content}</ul>

          <div className='buttons'>
            <Button2 onClick={() => likeOrDislike(postId.id, true)}><img src={Like} alt='imagem para likes'></img>{postId.likes}</Button2>
            <Button2 onClick={() => likeOrDislike(postId.id, false)}><img src={dislike} alt='imagem para dislikes'></img>{postId.dislikes}</Button2>
            <Button2><img src={commentIco} alt='imagem para comments'></img>{postId.comments}</Button2>
          </div>

        </BoxPost>



        <FormComment onSubmit={createComments}>
          <input
            value={commentContent}
            onChange={(event) => setCommentContent(event.target.value)}
            placeholder="Adicionar comentário"
          />
          <button ><img src={responder} onClick={createComments}/></button>
          <div><img src={line} /></div>
        </FormComment>


        {dataComment.map((data) => {
          return (
            <BoxInteraction className='card' key={data.id}>

              <p>Enviado por: {data.creatorNickName}</p>
              <ul>{data.comment}</ul>
              <div className='box-buttons'>
                <Button2 onClick={() => likeOrDislikeComments(data.id, true)}><img src={Like} alt='imagem para likes'></img>{data.likes}</Button2>
                <Button2 onClick={() => likeOrDislikeComments(data.id, false)}><img src={dislike} alt='imagem para dislikes'></img>{data.dislikes}</Button2>
              </div>

            </BoxInteraction>
          )
        }).reverse()}
      </ContainerComments>
    </>
  );
}
export default Comments