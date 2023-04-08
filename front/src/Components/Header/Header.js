import React from 'react'
import { ContainerHeader } from './Header.styled'
import logo2 from "../../assets/img/logo2.png"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { goTOLogin } from '../../Router/Cordinates'
import { BASE_URL } from '../../Constants/url'



function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()

  const deleteLogin = () =>{
    localStorage.removeItem("token")
    goTOLogin(navigate)
  }


  const diferentHeader = () => {
    switch (location.pathname) {
      case "/signup":
        return (
          <>

            <div className='img'>
              <img src={logo2} alt="logo" />

            </div>

            <div className='link'>
              <a onClick={() => goTOLogin(navigate)} role="button">Entrar</a>

            </div>

          </>

        )
      case "/posts":
        return (
          <>

            <div className='img'>
              <img src={logo2} alt="logo" />

            </div>

            <div className='link'>
              <a  role="button" onClick={() => deleteLogin()}>LogOut</a>

            </div>

          </>
        )

      case `/comments/${params.id}`:
        return (
          <>

            <div className='img'>
              <img src={logo2}  alt="logo" />

            </div>

            <div className='link'>
              <a  role="button" onClick={() => deleteLogin()}>LogOut</a>

            </div>

          </>
        )


      default:
        return (

          <div>
            <button onClick={() => goTOLogin(navigate)}>PÃ¡gina inicial</button>
          </div>
        )
    }
  }



  return (

    <ContainerHeader>

      {diferentHeader()}

    </ContainerHeader>
    

  )
}

export default Header