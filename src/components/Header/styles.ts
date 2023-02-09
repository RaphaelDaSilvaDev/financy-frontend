import { Menu } from "@szhsin/react-menu";
import { menuSelector, menuItemSelector } from "@szhsin/react-menu/style-utils";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 16rem;

  padding-top: 1.6rem;

  background-color: ${(props) => props.theme.primary};

  border-radius: 0 0 16px 16px;
`;

export const Content = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  cursor: pointer;

  & > img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 100%;
    border: 4px solid ${(props) => props.theme["primary-light"]};
  }
`;

export const Avatar = styled.div`
  width: 6.4rem;
  height: 6.4rem;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  border-radius: 100%;
  border: 4px solid ${(props) => props.theme["primary-light"]};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  color: #f5f5f5;

  & > span {
    font-size: 1.4rem;
    font-weight: 300;
    user-select: none;
  }

  & > strong {
    font-size: 1.8rem;
    font-weight: 400;
    user-select: none;
  }
`;

export const PopUp = styled(Menu)`
  ${menuSelector.name} {
    width: 20rem;
    background-color: ${(props) => props.theme["background-light"]};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme.background};
    z-index: 999;
    box-sizing: border-box;
    z-index: 100;
    list-style: none;
    user-select: none;
    margin: 0;
  }

  ${menuItemSelector.name} {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    outline: none;
    box-shadow: none;

    cursor: pointer;
    padding: 1.6rem;
  }

  ${menuItemSelector.hover} {
    background-color: ${(props) => props.theme.background};
  }
`;

export const Option = styled.div``;
