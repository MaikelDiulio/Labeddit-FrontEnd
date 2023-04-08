import styled from "styled-components";



export const ContainerComments = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const Button2 = styled.div`



`
export const BoxPost = styled.div`

display:  flex;
justify-content: center;
align-items:center;
flex-direction: column;
width: 359px;
border: 0.4px solid #E0E0E0;
border-radius: 12px;
margin-top: 50px;

ul{
    margin: 10px;
}

.buttons{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
}

`
export const FormComment = styled.div`

display: flex;
    justify-content: flex-end;
    align-items:center;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;

    input{
        width: 359px;
        height: 150px;
        background-color: #EDEDED;
        border: none;
        border-radius: 27px;
    }
    button{
        border: none;
        background-color:transparent;
        cursor: pointer;
    }

`

export const BoxInteraction = styled.div`

display:  flex;
justify-content: center;
align-items:center;
flex-direction: column;
width: 359px;
border: 0.4px solid #E0E0E0;
border-radius: 12px;
margin-top:20px;

ul{
    margin: 10px;
}

.box-buttons{
    display: flex;
      flex-direction:row;
      gap: 10px;
}

`