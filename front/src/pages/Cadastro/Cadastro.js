
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonsSignup, ContainerCadastro, FormSignup, PoliticaContainer } from './Cadastro.styled';
import Header from '../../Components/Header/Header';
import { BASE_URL, TOKEN_NAME } from '../../Constants/url';
import { goTOLogin, goToPosts, goToSignUp } from '../../Router/Cordinates';
import cadastrar from "../../assets/img/cadastrar.png"
import { emailRegex, passwordRegex } from '../../Constants/regex';

const Cadastro = () => {
  
  const [signupAccount, setSignupAccount] = useState([])
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checked, setIsChecked] = useState('')
  const token = window.localStorage.getItem("token")
  const navigate = useNavigate()

  const body = {
    'name': nickname,
    'email': email,
    'password': password
  }

  const signup = async () => {
    try {
      if (!email.match(emailRegex)) {
        alert('Por favor, digite um email válido.');
        return;
      }

      if (!password.match(passwordRegex)) {
        alert('A senha deve ter no mínimo oito caracteres, contendo pelo menos uma letra e um número.');
        return;
      }
      const response = await axios.post(`${BASE_URL}/users/signup`, body)

      const { token } = response.data
      setSignupAccount(token)
      window.localStorage.setItem("token", token)
      token ? alert('Cadastro realizado com sucesso, clique em entrar para fazer o login') : goToSignUp(navigate)
        && alert('Erro de cadastro!')
      window.location.reload()

    } catch (error) {
      console.log(error)
      alert('Usuário já Existe!.')

    }
  }

  return (
    <ContainerCadastro>
      <Header />

      <div className='container-text'>

        <h1>Olá, boas vindas ao<br /> LabEddit ;)</h1>
      </div>
      <FormSignup >

        <input
          type='text'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder='   Apelido'></input>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='   E-mail'></input>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='   Senha'></input>
      </FormSignup>


      <PoliticaContainer>

              <h5>Ao continuar, você concorda com o nosso <a href='https://thestartlaw.com/termo-de-uso/' role="button" >Contrato de <br/> usuário</a> e nossa <a href='' role="button">Política de Privacidade</a></h5>
              <div className='emails'>
                 <input
                   type="checkbox"
                   required="required"
                   value={checked}
                   onClick={() => setIsChecked(true)}
                 />
                 Eu concordo em receber emails sobre coisas legais <br/> no Labeddit
             </div>

         </PoliticaContainer>

      <ButtonsSignup>

        <button onClick={() => signup()}><img src={cadastrar} /></button>

      </ButtonsSignup>



    </ContainerCadastro>
  )
}











//   const navigate = useNavigate()

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [nickname, setNickname] = useState('')

//   const signup = async () => {

//     const body = {
//       nickname: nickname,
//       email: email,
//       password: password}

//     try{
//       const response = await axios.post(`${BASE_URL}/users/signup`, body)
//       localStorage.setItem('token', response.data.token)

//       goTOLogin(navigate)

//       console.log(response.data.token)

//     }catch(error){
//       console.log(error)
//     }
//   }


//   return (
//     <>
//     <Header/>
//     <ContainerCadastro>
//          <div className='container-text'>

//           <h1>Olá, boas vindas ao<br/> LabEddit ;)</h1>
//           </div>



//         <article>
//           <FormSignup onSubmit={signup} autoComplete="off">

//               <input
//                 type="nickname"
//                 value={nickname}
//                 onChange={(e) => setNickname(e.target.value)}
//                 placeholder="Nome"
//               />



//               <input
//                type="email"
//                value={email}
//                onChange={(e) => setEmail(e.target.value)}
//                placeholder="Email"
//               />



//               <input
//                type="password"
//                value={password}
//                onChange={(e) => setPassword(e.target.value)}
//                placeholder="Senha"
//               />
//           </FormSignup>
//           <PoliticaContainer>

//              <h5>Ao continuar, você concorda com o nosso <a href='' role="button" >Contrato de <br/> usuário</a> e nossa <a href='' role="button">Política de Privacidade</a></h5>

//              <div className='emails'>
//                 <input
//                   type="checkbox"
//                   required="required"
//                   value={checked}
//                   onClick={() => setIsChecked(true)}
//                 />
//                 Eu concordo em receber emails sobre coisas legais <br/> no Labeddit
//             </div>

//           </PoliticaContainer>

//           <ButtonsSignup>

//             <button onClick={()=>signup()}><img src={cadastrar}/></button>

//           </ButtonsSignup>



//         </article>
//     </ContainerCadastro>
//     </>
//   )
// }

export default Cadastro




