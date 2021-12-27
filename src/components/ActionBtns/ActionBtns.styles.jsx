import styled from "styled-components";

//theme
import { COLORS } from "../../../theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  border-bottom: 1px solid ${COLORS.secondary};
  background: ${COLORS.primary};
  padding: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  @media (max-width: 750px) {
    justify-content: center;
    white-space: nowrap;
  }

  button {
    font-size: ${COLORS.fontMed};
    border: 0px;
    padding: 0.5rem 1rem;
    cursor: pointer;

    :nth-of-type(1) {
      background: ${COLORS.secondary};
      color: ${COLORS.tertiary};
      margin-right: 1rem;
    }
    :nth-of-type(2) {
      background: ${COLORS.tertiary};
      color: ${COLORS.primary};
    }

    :last-of-type {
      margin-right: 2rem;
    }

    &:hover {
      filter: brightness(120%);
    }
  }
`;
