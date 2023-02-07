import styled from "styled-components";

export const Contaier = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 4.8rem;
    height: 2.4rem;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.primary};
    border-radius: 6px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 2rem;
    width: 2rem;
    border-radius: 4px;
    left: -2px;
    background-color: ${(props) => props.theme.primary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${(props) => props.theme.primary};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
