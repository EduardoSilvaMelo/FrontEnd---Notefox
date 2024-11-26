import styled from "styled-components";

export const ComponentStyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f8f9fa;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
  text-align: center;
  .colorFox{
 background-color: #cf0257;
  }
  .ColorGoogle{
    background: rgb(207, 14, 14);
  }
  p{
  font-size:20px;
  font-weight: 700;
  cursor: pointer;
  }
  a{
    text-decoration: none;
    color: black;
  }
`;

export const StyledLogotipo = styled.div`
  margin-bottom: 20px;

  img {
    width: 120px;
    height: auto;
  }
`;

export const StyledLoginInput = styled.input`
  width: 100%;
  padding: 12px 18px; 
  margin: 12px auto; 
  border: 1px solid black;
  color: #333;
  background-color: white;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #ae013f;
    box-shadow: 0 0 5px rgba(207, 2, 87, 0.5);
  }
`;

export const StyledLoginButton = styled.button`
  width: 100%; /* Aproveita todo o espaço disponível */
  background-color: #cf0257;

  padding: 12px 18px; 
  margin: 12px auto; 
  display: block; 
  border: none;
  align-items: center;
  text-align: center;
  border-radius: 10px; 
  font-size: 1.1rem;
  font-weight: 600; 
  cursor: pointer;
 
  background-color: #cf0257;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    
    transform: translateY(-3px); /* Efeito de elevação */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Sombra mais intensa */
  }

  &:active {
    transform: translateY(1px); /* Simula a pressão ao clicar */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra reduzida */
  }

  &:focus {
    outline: none; /* Remove a outline padrão */
   /* Adiciona uma outline de foco */
  }

`;
export const IconWrapper = styled.span`
  margin-right: 10px;
`;;