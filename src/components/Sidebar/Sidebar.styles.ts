import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #e4ebf1;
  margin-top: 60px;
  height: 100vh;
`;

export const SidebarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 10px;
`;

export const SidebarItem = styled.li`
  padding: 10px;
  cursor: pointer;
  border: 1px solid #fff;
  &:hover {
    border: 1px solid #e4ebf1;
  }
`;

export const SidebarLabel = styled.h2`
  font-size: 18px;
  font-weigth: 700;
  maigin-top: 12px;
  color: black;
  padding: 10px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #e4ebf1;
  margin: 24px 0;
`;
