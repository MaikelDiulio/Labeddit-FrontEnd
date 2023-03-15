import styled from "styled-components";
import continuar from "../../assets/img/continuar.png"


export const ContainerLogin = styled.div`
    overflow: hidden;

 /* background-color: black; */

`

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 150px;

input{
    height: 6.98vh;
    width: 600px;
    margin-bottom: 10px;
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    
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

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    
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

        :active {
        filter: brightness(0.6);
        }
        }
    }
    
`
