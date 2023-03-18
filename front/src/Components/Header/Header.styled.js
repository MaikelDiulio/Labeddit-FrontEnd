import styled from "styled-components";


export const ContainerHeader = styled.div`

    width: 100%;
    height: 5.82vh;
    background-color: #EDEDED;
    display: flex;
    justify-content: space-around;

    .img{
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items:center;

        img{
            width: 40px;
            height: 40px;
        }
        
    }
    .link{
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        a{
            margin-right: 50px;
            color:#4088CB;
            font-weight: bold;
            text-decoration:none ;
        }

    }



`