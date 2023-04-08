
import axios from "axios";
import { useState } from "react";
import { CommentBoxCard, LikeDislikeBoxContainer } from "./CommenCard.styled";
import { BASE_URL, TOKEN_NAME } from "../../Constants/url";
import LikeIcon from "../../assets/img/likeIco.png";
// import  from "";
// import  from "";


function CommentCard(props){
    const { comment, fetchComments} = props

    const [isLoading, setIsLoading] = useState(false);

    const like = async () => {
        setIsLoading(true)
    
        try {
          const token = window.localStorage.getItem(TOKEN_NAME);
    
          const config = {
            headers: {
              Authorization: token
            }
          };
    
          const body = {
            like: true
          }
    
          await axios.put(BASE_URL + `/comments/${comment.id}/like`, body, config);
    
          setIsLoading(false)
          fetchComments()
        } catch (error) {
          console.error(error?.response?.data);
          window.alert(error?.response?.data)
        }
      };

      const dislike = async () => {
        setIsLoading(true)
    
        try {
          const token = window.localStorage.getItem(TOKEN_NAME);
    
          const config = {
            headers: {
              Authorization: token
            }
          };
    
          const body = {
            like: false
          }
    
          await axios.put(BASE_URL + `/comments/${comment.id}/like`, body, config);
    
          setIsLoading(false)
          fetchComments()
        } catch (error) {
          console.error(error?.response?.data);
          window.alert(error?.response?.data)
        }
      };

    return(
        <CommentBoxCard>
            <span>Enviado por: {comment.creator.name}</span> 
            <p>{comment.content}</p>
            <LikeDislikeBoxContainer>
                <button className="btn-like" disabled={isLoading} onClick={like}>
                    <img src={LikeIcon} alt="Botão de like"/>
                </button>
                <p>{comment.likes}</p>
                <button className="btn-dislike" disabled={isLoading} onClick={dislike}>
                    <img src={DislikeIcon} alt="Botão de dislike"/>
                </button>
                <p>{comment.dislikes}</p>
            </LikeDislikeBoxContainer>
        </CommentBoxCard>
    )
}

export default CommentCard;