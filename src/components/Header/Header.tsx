import {
  HeaderContainer,
  LogoContainer,
  Logo,
  SearchBarContainer,
  SearchInput,
  Link,
  NavBarContainer,
} from "./Header.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        {" "}
        <Logo>Logo</Logo>
      </LogoContainer>
      <NavBarContainer>
        <Link>Buy</Link>
        <Link>Help</Link>
        <Link>Contact</Link>
      </NavBarContainer>
      <SearchBarContainer>
        <SearchInput type="text" placeholder="Search..." />
        <Link>Print</Link>
        <Link> O</Link>
      </SearchBarContainer>
    </HeaderContainer>
  );
};
