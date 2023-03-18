import React from 'react'
import Header from '../../Components/Header/Header'
import { ContainerCadastro, FormSignup, ButtonsSignup, PoliticaContainer } from './Cadastro.styled'
import cadastrar from "../../assets/img/cadastrar.png"

function Cadastro() {
 
  return (
    <>
    <ContainerCadastro id="cadastro">

       <Header/>
        <div className='container-text'>

       <h1>Olá, boas vindas ao<br/> LabEddit ;)</h1>
        </div>

        <FormSignup>
      
          <input type="name" id="name" name="email" placeholder="   Apelido" required/>
          <input type="email" id="email" name="password" placeholder="   E-mail"required/>
          <input type="password" id="password" name="password" placeholder="   Senha"required/>
    

        </FormSignup>

        <PoliticaContainer>

        <h5>Ao continuar, você concorda com o nosso <a href='' role="button" >Contrato de <br/> usuário</a> e nossa <a href='' role="button">Política de Privacidade</a></h5>
          <div className='emails'>
          <label>
              <input  type="checkbox" name="checkbox" />
           </label>
            <h5>Eu concordo em receber emails sobre coisas legais no Labeddit</h5>
          </div>
        </PoliticaContainer>
        

        <ButtonsSignup>

          <button> <img src={cadastrar}/> </button>
          
        </ButtonsSignup>
    </ContainerCadastro>
   
   
    </>
  )
}

export default Cadastro