import styled from 'styled-components';

export const NavbarHome = styled.div`
  background: ${({ theme }) => (theme === 'escuro' ? '#121212' : '#ffffff')};
  color: ${({ theme }) => (theme === 'escuro' ? '#ffffff' : '#333333')};
  width: 100vw;
  min-height: 100vh;
  transition: background 0.3s ease, color 0.3s ease;
  display: flex;
  flex-direction: column;
`;

export const LayoutInicio = styled.div`
  margin-top: 150px;
  padding: 20px;
  max-width: 800px;

  h1 {
    font-size: 10rem;
    font-weight: 700;
    color: ${({ theme }) => (theme === 'escuro' ? '#f3f3f3' : '#333')};
    line-height: 1.5;
    text-align: left;
    word-wrap: break-word;


  p{
    color: ${({ theme }) => (theme === 'escuro' ? '#f3f3f3' : '#333')};
  }



    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }
`;
