import {
  SidebarContainer,
  SidebarList,
  SidebarItem,
  SidebarLabel,
  Divider,
} from "./Sidebar.styles";
export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarLabel>Section 1</SidebarLabel>
        <SidebarItem>Loren Ipsum1</SidebarItem>
        <SidebarItem>Loren Ipsum</SidebarItem>
        <SidebarItem>Loren Ipsum</SidebarItem>
        <SidebarItem>Loren Ipsum</SidebarItem>
        <SidebarItem>Loren Ipsum</SidebarItem>
        <Divider />
        <SidebarLabel>Section 2</SidebarLabel>
        <SidebarItem>Loren Ipsum</SidebarItem>
        <SidebarItem>Loren Ipsum</SidebarItem>
        <SidebarItem>Loren Ipsum</SidebarItem>
        <SidebarItem>Loren Ipsum</SidebarItem>
        <SidebarItem>Loren Ipsum</SidebarItem>
        <Divider />
        <SidebarLabel>Section 3</SidebarLabel>
        <SidebarItem>Loren Ipsum</SidebarItem>
        <SidebarItem>Loren Ipsum</SidebarItem>
        <SidebarItem>Loren Ipsum</SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
};
