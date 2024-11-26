import React, { useState } from 'react'
import InputForge from '../InputForget'
import { ContainerForget } from './styled'
import { Link } from 'react-router-dom';
import RecoveryButton from '../RecoveyButton';
import Logotipo from '../../assets/Logotipoo.png'
export default function ComponentForget() {
    const [email, setEmail] = useState('');

  return (
    <ContainerForget>
        <div>
            <Link to='/Login'>  <img src={Logotipo} alt='TESTE' className='Logotipo'/></Link>
          
        </div>

        <form>
         <h1 className="Recoveryh1">Recover your profile</h1>

         <InputForge
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
       <RecoveryButton type='submit'>Enviar</RecoveryButton>
        </div>
        </form>
    </ContainerForget>
  )
}
