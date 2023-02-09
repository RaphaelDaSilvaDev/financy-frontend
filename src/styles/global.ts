import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme["background-light"]};
  border: 0px none #ffffff;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme["background-light"]};
}
::-webkit-scrollbar-thumb:active {
  background: ${(props) => props.theme["background-light"]};
}
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.placeholder};
  border: 0px none #ffffff;
  border-radius: 3px;
}
::-webkit-scrollbar-track:hover {
  background:${(props) => props.theme.placeholder};
}
::-webkit-scrollbar-track:active {
  background:${(props) => props.theme.placeholder};
}
::-webkit-scrollbar-corner {
  background: transparent;
}
  
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["primary-light"]};
  }
  
  :root{
    font-size: 62.5%;
  }

  body{
    background-color: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["text-secondary"]};
  }

  body, input-security, textarea, button, input{
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1.8rem;
  }

  h1, h2, h3, h4, h5,h6{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme["text"]};
  }

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    :hover {
      color: ${(props) => props.theme["primary-light"]};
      transition: color 175ms;
    }
  }
`;
