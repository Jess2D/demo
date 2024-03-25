import {
  HeaderContainer,
  LogoContainer,
  Logo,
  SettingsContainer,
  SearchContainer,
  Link,
  NavBarContainer,
} from "./Header.styles";
import { Input ,DropdownMenu, DropdownMenuItem, DropdownMenuButton, DropdownMenuList, Colors, Icon, IconList} from "@ptml/design-system";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo><img src={logo} alt="logo" /></Logo>
      </LogoContainer>
      <NavBarContainer>
        <Link>Buy</Link>
        <Link>Help</Link>
        <Link>Contact</Link>
        <SearchContainer>
        <Input
          id="search"
          onBlur={function Ya() { }}
          onChange={function Ya() { }}
          onFocus={function Ya() { }}
          placeholder="Search Job ID, Claim or Rego # ..."
          solo
          soloErrorMessage=""
        />
        </SearchContainer>
        </NavBarContainer>
        <SettingsContainer>
        <Link><Icon name={IconList.INFO} label="Icon Label" color={Colors.White} /> Guides</Link>
        <Link><Icon name={IconList.PRINTER} label="Icon Label" color={Colors.White} />Print</Link>
        <DropdownMenu  
          data-testid="dropdown-test"
          onOpenChange={function Ya() { }}   
        >
          <DropdownMenuButton
            hasArrow
            ariaLabel="Menu"
            data-testid="dropdown-menu"
            labelColor={Colors.White}
            labelIcon="user"
            labelSpacing="xxxsmall"
          >
            John Doodle
          </DropdownMenuButton>
          <DropdownMenuList
            data-testid="test"
            minimumPopoverWidth={215}
          >
            <DropdownMenuItem
              onSelect={function Ya() { }}
              selected
            >
              My Account
            </DropdownMenuItem>
            <DropdownMenuItem
              data-testid="testId-disabled-menu-item"
              onSelect={function Ya() { }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuList>
        </DropdownMenu>
        </SettingsContainer>
    </HeaderContainer>
  );
};
