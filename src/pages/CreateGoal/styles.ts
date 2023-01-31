import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  position: relative;
  top: -4rem; ;
`;

export const Content = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const ColorContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  padding-bottom: 2.4rem;
`;

export const SeparateBy = styled.div`
  width: 100%;
  height: 9.8rem;
  display: flex;
  gap: 2.4rem;
`;

export const SeparateByContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const SeparateByValue = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & > span {
    font-weight: 300;
  }
`;

export const SeparatedByValueBar = styled.div`
  width: 0.4rem;
  height: 2.4rem;
  background-color: ${(props) => props.theme.primary};
`;

export const SeparatedByPercentageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -1.6rem;
`;

interface PercentageProps {
  sizeChange: string;
}

export const SeparatedByPercentage = styled.input<PercentageProps>`
  -webkit-appearance: none;

  box-shadow: none;

  width: 100%;
  height: 0.4rem;
  background: ${(props) => props.theme.background};
  border-radius: 8px;
  background-image: linear-gradient(
    ${(props) => props.theme.primary},
    ${(props) => props.theme.primary}
  );
  cursor: pointer;
  background-size: ${(props) => props.sizeChange};
  background-repeat: no-repeat;

  :focus {
    box-shadow: none;
  }

  /* Input Thumb */
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 0.2rem;
    cursor: pointer;
    background: ${(props) => props.theme.primary};
    transition: background 0.3s ease-in-out;
  }

  ::-moz-range-thumb {
    -webkit-appearance: none;
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 0.2rem;
    background: ${(props) => props.theme.primary};
    transition: background 0.3s ease-in-out;
  }

  ::-ms-thumb {
    -webkit-appearance: none;
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 0.2rem;
    background: ${(props) => props.theme.primary};
    transition: background 0.3s ease-in-out;
  }

  ::-webkit-slider-thumb:hover {
    background: ${(props) => props.theme["primary-light"]};
  }

  ::-moz-range-thumb:hover {
    background: ${(props) => props.theme["primary-light"]};
  }

  ::-ms-thumb:hover {
    background: ${(props) => props.theme["primary-light"]};
  }

  /* Input Track */
  input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input[type="range"]::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input[type="range"]::-ms-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

export const Percentage = styled.output<PercentageProps>`
  position: relative;
  transform-origin: center center;
  display: block;
  text-align: center;
  left: ${(props) => props.sizeChange};
  width: fit-content;
  font-size: 1.4rem;
  font-weight: 300;

  &::after {
    content: "%";
    display: block;
    margin-top: -18px;
    margin-right: -40px;
  }
`;

export const IndeterminateTime = styled.div`
  width: 100%;

  & > span {
    font-size: 1.4rem;
    font-weight: 300;
  }
`;

export const Input = styled.input`
  min-width: 2rem;
  background-color: ${(props) => props.theme["background-light"]};
  outline: none;
  border: none;
  box-shadow: none !important;

  color: ${(props) => props.theme.text};
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const DateInput = styled.input`
  width: 4rem;
  background-color: ${(props) => props.theme["background-light"]};
  outline: none;
  border: none;
  box-shadow: none !important;

  color: ${(props) => props.theme.text};
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Warning = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  margin-top: 0.8rem;
`;
