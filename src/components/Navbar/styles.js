import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => (theme === 'escuro' ? '#333' : '#f3f3f3')};
  color: ${({ theme }) => (theme === 'escuro' ? '#f3f3f3' : '#333')};
  padding: 15px 7%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .logo-container {
    display: flex;
    align-items: center;
    gap: 10px;

    .logo {
      width: 180px;
      height: auto;
    }

    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${({ theme }) => (theme === 'escuro' ? '#fff' : '#333')};
    }
  }

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: 1rem;
      color: ${({ theme }) => (theme === 'escuro' ? '#ddd' : '#555')};
      cursor: pointer;
      transition: color 0.3s ease;
      font-weight: 600;

      &:hover {
        color: #cf0257;
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 15px;

    .login-btn,
    .signup-btn {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .login-btn {
      background-color: transparent;
      color: #cf0257;
      border: 2px solid #cf0257;

      &:hover {
        background-color: #cf0257;
        color: #fff;
      }
    }

    .signup-btn {
      background-color: #cf0257;
      color: #fff;

      &:hover {
        background-color: #b0024a;
      }
    }

    .toggle {
      cursor: pointer;

      img {
        width: 30px;
        height: auto;
      }
    }
  }
`;
