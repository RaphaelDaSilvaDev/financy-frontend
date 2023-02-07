import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .tooltip {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.6rem;
  }

  .tooltipContainer {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-family: "Montserrat", sans-serif !important;
    font-weight: 300;
    font-size: 1.4rem !important;
    color: ${(props) => props.theme.text};
  }

  .bullet {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 4px;
    display: inline-block;
  }

  .tooltipPointWrapper {
    display: block;
    text-align: center;
    padding: 10px 0;
  }

  .tooltipPoint {
    font-size: 1.4rem;
    padding-left: 5px;

    font-family: "Montserrat", sans-serif !important;
    font-weight: 300;

    color: ${(props) => props.theme.text};

    & > strong {
      font-weight: 800;
    }
  }

  .tooltipValueSuffix {
    padding-left: 5px;
    color: #1bc9a8;
  }

  .tooltipLine {
    display: block;
    opacity: 0.5;
    background-color: #fff;
    width: 100%;
    height: 1px;
    padding: 0;
    margin: 0;
  }

  .tooltipFooter {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 300;
    font-size: 1.4rem !important;
    color: ${(props) => props.theme.text};
  }
`;
