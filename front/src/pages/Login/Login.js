import React from 'react'

import LogoOne from '../../Components/Logo/Logo'
import { Buttons, ContainerLogin, Form } from './Login.styled'
import continuar from "../../assets/img/continuar.png"
import criarConta from "../../assets/img/crieconta.png"
import line from "../../assets/img/Line.png"

function Login() {

  return (
    <ContainerLogin>
      <LogoOne />

      <Form>
      
      <input type="email" id="email" name="email" placeholder="   E-mail" required/>
    
      
      <input type="password" id="password" name="password" placeholder="   Senha"required/>
    

      </Form>

        <Buttons>

          <button> <img src={continuar}/> </button>
          <img className='line' src={line}/> 
          <button className='button-criar' href="/signup"> <img src={criarConta}/> </button>

        </Buttons>




    </ContainerLogin>
  )
}

export default Login