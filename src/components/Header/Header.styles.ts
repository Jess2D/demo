import styled from "styled-components";
import { Colors, Spacings } from '@ptml/design-system';

export const HeaderContainer = styled.header`
  background-color: ${Colors.Blue70};
  padding: 0 ${Spacings.medium};
  display: flex;
  direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  color: white;
  font-family: inherit;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-items: center;
  flex-grow:2;
`;
export const LogoContainer = styled.div`
  width: 250px;
`;

export const SearchContainer = styled.div`
  align-items: center;
  justify-content:center;
  width: 50%;
  margin-top: ${Spacings.xxsmall};
`;

export const Logo = styled.div`
  font-weight: bold;
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction:row;
  button:hover {
    background: ${Colors.Blue85};
  }
`;


export const Link = styled.a`

    cursor: pointer;
    text-decoration: none;
    padding: 1em .7em;
    color: ${Colors.White};
    position: relative;
    min-width: 4em;
    place-content: center;
    align-items: center;
    text-align: center;

    svg{
      margin-right: ${Spacings.minuscule};

    }

    &:hover {
      color: ${Colors.White};
      background: ${Colors.Blue85};
    }
`;
