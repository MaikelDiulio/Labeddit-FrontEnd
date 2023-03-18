import styled from "styled-components";

export const ContainerLogo = styled.div`

display:flex ;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
/* width: 12vw;
height: 16.5vh; */
@media (max-width: 414px){
        margin-top: 50px;
    }

h5{
    font-weight:normal;
}
 
   img {
    width: 230px;
    height:230px;
    @media (max-width: 414px){
        width: 180px;
        height: 180px;
    }
    @media (max-width: 390px){
        width: 200px;
        height: 200px;
    }

    

   }


`