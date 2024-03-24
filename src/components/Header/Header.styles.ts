import styled from "styled-components";

// Styled-components para os elementos do Header
export const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  direction: row;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #f46036;
  color: white;
`;

export const NavBarContainer = styled.div`
  flex-grow: 3;
`;
export const LogoContainer = styled.div`
  width: 250px;
`;

export const Logo = styled.div`
  font-weight: bold;
`;

export const SearchBarContainer = styled.div`
  min-width: 400px;
  justify-content: rigth;
  // Adicione estilos para o contêiner da barra de pesquisa
`;

export const SearchInput = styled.input`
  padding: 8px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Link = styled.a`
  margin: 16px;
  cursor: pointer;
  color: #fcd1c5;

  &:hover {
    color: #fab29e;
  }
`;
