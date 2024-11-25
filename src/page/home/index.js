import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { NavbarHome, LayoutInicio } from './styled';

export default function Home() {
  const [theme, setTheme] = useState('escuro');

  return (
    <NavbarHome theme={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <LayoutInicio>
        <h1>
          Organize e compartilhe <br/> suas ideias com notas digitais
        </h1>
        <p>Nossa plataforma de colaboração é o espaço ideal para transformar pensamentos em ações, 
        com ferramentas práticas e intuitivas para suas anotações — e muito mais</p>
      </LayoutInicio>
    </NavbarHome>
  );
}
