import React from 'react'
import logo1 from "../../assets/img/logo1.png"
import { ContainerLogo } from './Logo.styled'

function LogoOne() {
  return (
    <ContainerLogo>
        <img src={logo1}/>
        <h5>O projeto de rede social Labenu</h5>
    </ContainerLogo>
  )
}

export default LogoOne