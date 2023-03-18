export const goToSignUp = (navigate) => {
    navigate("/signup")
  }


export const goTOLogin = (navigate) => {
    navigate("/")
  }

 export const goToComments = (navigate, id) => {
navigate(`/comments/${id}`)
 } 

 export const goToPosts = (navigate, id) => {
    navigate(`/posts/${id}`)
 } 


