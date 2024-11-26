import React from "react";
import {
  ComponentStyledLogin,
  StyledLoginInput,
  StyledLoginButton,
  StyledLogotipo,
  IconWrapper,
} from "./styles";
import Logotipo from "../../assets/Logotipoo.png";
import { GiFox } from "react-icons/gi";
import { FaGoogle } from "react-icons/fa";

import LoginButton from "../LoginButton";
import { Link } from "react-router-dom";
export default function ComponentLogin() {
  return (
    <ComponentStyledLogin>
      <StyledLogotipo>
        <Link to="/">
          {" "}
          <img src={Logotipo} alt="Logotipo" />
        </Link>
      </StyledLogotipo>

      <div>
        <Link to="/Cadastra">
          <LoginButton className="colorFox">
            <IconWrapper>
              {" "}
              <GiFox />
            </IconWrapper>
            Sign up
          </LoginButton>
        </Link>

        <LoginButton className="ColorGoogle">
          <IconWrapper>
            {" "}
            <FaGoogle />
          </IconWrapper>
          Google
        </LoginButton>
      </div>

      <div>
        <StyledLoginInput type="text" placeholder="Usuário" />
        <StyledLoginInput type="password" placeholder="Senha" />
      </div>
      <div>
        <Link to="/Forgotpassword">
         <p>Forgot password</p>
        </Link>
      
      </div>
      <StyledLoginButton>Entrar</StyledLoginButton>
    </ComponentStyledLogin>
  );
} 
