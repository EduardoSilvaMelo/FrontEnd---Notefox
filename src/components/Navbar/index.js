import React from 'react';
import { NavbarContainer } from './styles';
import Logo from '../../assets/Logotipoo.png';
import Logoescuro from '../../assets/night.png';
import Logoluz from '../../assets/day.png';

export default function Navbar({ theme, setTheme }) {
  const toggleMode = () => {
    theme === 'escuro' ? setTheme('luz') : setTheme('escuro');
  };

  return (
    <NavbarContainer theme={theme}>
      <div className="logo-container">
        <img src={Logo} alt="LogoMarca" className="logo" />
      </div>

      <ul>
        <li>Início</li>
        <li>Funcionalidades</li>
        <li>Planos ou Preços</li>
        <li>Sobre</li>
      </ul>

      <div className="actions">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Cadastre-se</button>
        <div className="toggle">
          <img 
            onClick={toggleMode} 
            src={theme === 'escuro' ? Logoescuro : Logoluz} 
            alt={theme === 'escuro' ? 'Modo Escuro' : 'Modo Claro'} 
          />
        </div>
      </div>
    </NavbarContainer>
  );
}
