import styled from "styled-components";
import { COLORS } from "../../../theme";

export const Main = styled.div`
  flex: 1;
  height: 100vh;
  overflow: hidden;
  background-color: ${COLORS.primary};
  position: relative;
  z-index: 1000;
  ${"" /* white-space:nowrap; */};
`;
