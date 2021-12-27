import styled from "styled-components";
import { COLORS } from "../../../theme";

export const Wrapper = styled.div`
  padding: 0px;

  p {
    padding: 1rem 2rem;
    ${"" /* text-align: left; */}
    text-transform: capitalize;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${COLORS.secondary};
    }
  }

  button {
    border: 0px;
    outline: 0px;
    background: ${COLORS.tertiary};
    color: ${COLORS.junior};
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
  }
`;
