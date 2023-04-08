import React, { useEffect, useState } from 'react'
import axios from "axios";
import LogoOne from '../../Components/Logo/Logo'
import { Buttons, ContainerLogin, Form } from './Login.styled'
import continuar from "../../assets/img/continuar.png"
import criarConta from "../../assets/img/crieconta.png"
import line from "../../assets/img/Line.png"
// import { useLocation } from 'react-router-dom'
import { goTOLogin, goToPosts, goToSignUp } from '../../Router/Cordinates';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Constants/url';





const Login = () => {


  const [emailLogin, setEmailLogin] = useState("")
  const [senhaLogin, setSenha] = useState("")
  const [storage, setStorage] = useState("")

  // const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    postLogin()
  }, [])

  const authentication = {
    "email": emailLogin,
    "password": senhaLogin
  }


  const postLogin = async () => {

    try {


      const response = await axios.post(`${BASE_URL}/users/login`, authentication)
      const token = response.data.token
      setStorage(response.data.token)
      window.localStorage.setItem("token", token)
      token ? goToPosts(navigate) : goTOLogin(navigate)
    } catch (error) {
      console.log(error)
    }


  }


  return (
    <ContainerLogin>
      <LogoOne />

      <Form>

        <input value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} type="email" id="email" name="email" placeholder="   E-mail" />


        <input value={senhaLogin} onChange={(e) => setSenha(e.target.value)} type="password" id="password" name="password" placeholder="   Senha" />


      </Form>

      <Buttons>

        <button onClick={() => postLogin()}> <img src={continuar} /> </button>
        <img className='line' src={line} />
        <button onClick={() => goToSignUp(navigate)} className='button-criar' href="/signup"> <img src={criarConta} /> </button>

      </Buttons>




    </ContainerLogin>
  )
}
export default Login