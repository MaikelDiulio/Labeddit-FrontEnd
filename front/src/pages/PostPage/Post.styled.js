import styled from "styled-components";


export const ContainerPost = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  gap: 18px;




  .box-input{
    display: flex;
    justify-content: flex-end;
    align-items:center;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;

    input{
        width: 359px;
        height: 150px;
        background-color: #EDEDED;
        border: none;
        border-radius: 27px;
    }

    button{

        border: transparent;

        img{
            
        }
    }
  }

  


`

export const BoxInteraction= styled.div`

    display:  flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    width: 359px;
    border: 0.4px solid #E0E0E0;
    border-radius: 12px;
    /* gap:18px; */


    .box-segments{
      display: flex;
      flex-direction:row;
      gap:10px;
    } 

    button{
      border: none;
      background-color: transparent;
    }

    ul{
      margin: 5px;
    }
    
  

`