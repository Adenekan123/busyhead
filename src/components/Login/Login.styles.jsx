import styled from "styled-components";
import { COLORS } from "../../../theme";

export const Wrapper = styled.div`
  padding: 2rem;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  form {
    background-color: ${COLORS.junior};
    padding: 2rem;
    box-sizing: border-box;
    width: 30%;
    font-size: 1.2rem;
    box-shadow: 0px 25px 30px rgba(0, 0, 0, 5%);

    @media (max-width: 900px) {
      width: 80%;
    }
    @media (max-width: 750px) {
      width: 100%;
    }

    input {
      width: 100%;
      padding: 1rem;
      box-sizing: border-box;
      margin-bottom: 3rem;
      font-size: 1.2rem;
      border: 1px solid ${COLORS.tertiary};
    }
    label {
      display: block;
      margin-bottom: 1rem;
      font-weight: bold;
    }
    button {
      border: 1px solid;
      background: ${COLORS.tertiary};
      color: ${COLORS.junior};
      padding: 0.7rem 1.5rem;
      border: 0px;
      font-size: 1.5rem;
      cursor: pointer;

      &:hover {
        background: ${COLORS.primaryText};
      }
    }

    legend {
      font-size: 2rem;
      margin-bottom: 3rem;
      font-weight: bold;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 1.2rem;
      margin-top: 2rem;

      a {
        text-decoration: none;
      }
    }
  }
`;
