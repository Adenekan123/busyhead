import styled from "styled-components";
import { COLORS } from "../../../theme";

export const Wrapper = styled.div`
  flex: 0 1 250px;
  background-color: white;
  padding: 1rem;
  background-color: ${COLORS.junior};
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.08);

  a {
    text-decoration: none;
  }

  div.countdown {
    margin-top: 40px;
    width: 100%;
    height: 50px;
    border-radius: 50px;
    background-color: ${COLORS.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    color: ${COLORS.primaryText};
    border: 1px solid ${COLORS.secondary};
    font-weight: bold;
    font-size: small;
    text-align: center;
    z-index: "0"
      ${
        "" /* @media(max-width:750px){
            white-space:nowrap;
        } */
      };
  }

  div.body {
    text-align: center;
    color: ${COLORS.primaryText};
  }
`;
