import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12rem;

  @media screen and (max-width: 954px) {
    padding-inline: 0rem;
    flex-direction: column;
  }
`;

export const Hero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  position: relative;

  @media screen and (max-width: 954px) {
    justify-content: center;
  }
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2.4rem;

  & > img {
    width: 16.8rem;
    height: 16.8rem;
  }

  & > h1 {
    font-size: 4.8rem;
  }

  @media screen and (max-width: 954px) {
    flex-direction: column;
  }
`;

export const SloganContainer = styled.span`
  width: 100%;

  & > span {
    font-size: 3.2rem;
  }

  @media screen and (max-width: 954px) {
    text-align: center;
  }
`;

export const LoginContainer = styled.div`
  width: 80%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 954px) {
    width: 100%;
  }
`;

export const LoginContent = styled.div`
  background-color: ${(props) => props.theme["background-light"]};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  padding: 32px 16px;

  & > h2 {
    font-size: 3.2rem;
  }

  & > span {
    align-self: flex-start;
    & > a {
      color: ${(props) => props.theme.primary};
      text-decoration: none;

      :hover {
        color: ${(props) => props.theme["primary-light"]};
        transition: color 175ms;
      }
    }
  }

  @media screen and (max-width: 954px) {
    width: 100%;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
`;

export const Terms = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const ArrowDown = styled.div`
  position: absolute;
  bottom: 4rem;
  right: 47%;
  display: none;

  & > a > svg {
    color: ${(props) => props.theme.text};
  }

  @media screen and (max-width: 954px) {
    display: block;
  }
`;
