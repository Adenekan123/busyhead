import styled from "styled-components";
import { COLORS } from "../../../theme";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);

  .loader {
    font-size: 3.5rem;
    color: ${COLORS.junior};
  }
`;
