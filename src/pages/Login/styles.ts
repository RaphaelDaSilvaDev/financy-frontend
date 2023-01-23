import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12rem;
`;

export const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
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
`;

export const SloganContainer = styled.span`
  width: 100%;

  & > span {
    font-size: 3.2rem;
  }
`;

export const LoginContainer = styled.div`
  width: 80%;

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
`;

export const InputsContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;
