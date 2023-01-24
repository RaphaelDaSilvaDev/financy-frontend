import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: relative;
  top: -4rem;
`;

export const EditProfile = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  gap: 2.4rem;
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  gap: 3.2rem;
`;

export const SwitchTheme = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    font-weight: 300;
  }

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
