import React from 'react'
import { ContainerHeader } from './Header.styled'
import logo2 from "../../assets/img/logo2.png"
import { useLocation, useNavigate } from "react-router-dom"
import { goTOLogin } from '../../Router/Cordinates'



function Header() {
  const navigate = useNavigate()
  const location = useLocation()


  const diferentHeader = () => {
    switch (location.pathname) {
      case "/signup":
        return (
          <>

            <div className='img'>
              <img src={logo2} alt="logo" />

            </div>

            <div className='link'>
              <a href='' role="button">Entrar</a>

            </div>

          </>

        )
      case "/posts/:id":
        return (
          <>

            <div className='img'>
              <img src={logo2} alt="logo" />

            </div>

            <div className='link'>
              <a  role="button">LogOut</a>

            </div>

          </>
        )

      case "/comments/:id":
        return (
          <>

            <div className='img'>
              <img src={logo2} alt="logo" />

            </div>

            <div className='link'>
              <a  role="button">LogOut</a>

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