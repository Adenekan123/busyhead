import styled from "styled-components";
import { COLORS } from "../../../theme";

export const Wrapper = styled.div`
  height: 2rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  ${"" /* justify-content: space-between; */}
  color: ${COLORS.primaryText};
  font-weight: bold;
  background-color: ${COLORS.junior};
  border-bottom: 1px solid ${COLORS.secondary};
  ${"" /* position: relative; */}

  @media (max-width: 750px) {
    white-space: nowrap;
  }

  p {
    text-align: center;
    cursor: pointer;
  }

  .notification {
    ${"" /* margin-left: auto; */}
    position: absolute;
    right: 7rem;

    i {
      font-size: 1.3rem;
      color: ${COLORS.tertiary};
    }

    span {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      border-radius: 0.5rem;
      min-width: 30px;
      min-height: 15px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 11px;
      background-color: ${COLORS.secondary};
    }
  }
`;
