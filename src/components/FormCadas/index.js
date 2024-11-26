import React, { useState } from 'react'
import { ContainerCadastra } from './styles'
import { StyledLoginButton, StyledLoginInput } from '../Login/styles'
import Logotipo from '../../assets/Logotipoo.png'
import { Link } from 'react-router-dom';
export default function ComponentSing() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirPassword, setConfirPassword] = useState('');

  const validatePasswords =() =>{
    if (password !== ConfirPassword){
      alert('As senhas não coincidem!');
        return false;
    }
    return true
   }
  return (
    <ContainerCadastra>
      <div>
        <Link to='/Login'>        <img src={Logotipo} alt='tste' className='Logotipo'/>
</Link>
      </div>
         <div>
         <StyledLoginInput type="Nome" placeholder="Usuário" 
       
        value={nome}
        onChange={(e) => setNome(e.target.value)}/>


         <StyledLoginInput type="email" placeholder="Email" 
         value={email}
         onChange={(e) => setEmail(e.target.value)}/>
         <StyledLoginInput type="password" placeholder="Senha"
         value={password}
         onChange={(e) => setPassword(e.target.value)} />
         <StyledLoginInput type="password" placeholder="Confirmar Senha"
         value={ConfirPassword}
         onChange={(e) => setConfirPassword(e.target.value)} />
         </div>
         <StyledLoginButton>Fazer o login</StyledLoginButton>
    </ContainerCadastra>
  )
}
