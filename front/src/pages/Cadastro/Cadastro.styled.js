import styled from "styled-components";

export const ContainerCadastro = styled.div`


    
   overflow: -moz-hidden-unscrollable;



    .container-text{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300px;
        margin-bottom: 50px;

        @media (max-width: 390px){
            display: flex;
        justify-content: center;
        align-items: end;
             
         }
    
        h1{
            color: #373737;
            font-family: 'IBM Plex Sans', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 5.25rem;
            line-height: 100px;

            @media (max-width: 590px){
             width: 500px;
         }
         @media (max-width: 390px){
            font-size: 2rem;
            line-height: 60px;
             
         }
         @media (max-width: 370px){
             width: 200px;
         }

            
            
        }
    }

`

export const FormSignup = styled.form`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     margin-top: 100px;
     
     input{
         height: 6.98vh;
         width: 600px;
         margin-bottom: 10px;
         
         
         @media (max-width: 590px){
             width: 500px;
         }
         @media (max-width: 390px){
             width: 300px;
         }
         @media (max-width: 370px){
             width: 200px;
         }
         
     }
` 

export const ButtonsSignup = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    
    .line{
        margin: 10px;
    }
    
    button{
        width: 28.515625vw;
        border: none;
        background: transparent;
        /* margin-bottom: 10px; */
        
        :hover {
        cursor:pointer;
        filter: brightness(1.1);
        }
        :active {
        filter: brightness(0.95);
        }

        @media (max-width: 998px){
            width: 20VW;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    

        
    }

    .button-criar{
        :hover {
        cursor:pointer;
        filter: brightness(0.8);
        }

        :active {
        filter: brightness(0.6);
        }
        
    }
    
`

export const PoliticaContainer = styled.div`

  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h5{
    font-weight: normal;

  }
  
  a{
      font-weight: normal;
    color: #4088CB;
    text-decoration: none;
   }

   .emails{
    font-weight: normal;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    h5{
      font-weight: normal;

    }


    input{
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }
   }

`