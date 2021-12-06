import styled from "styled-components";

export const Radial = styled.div`
  position: absolute;
  width: 904px;
  right: 0;
  z-index: -1;
  bottom: -10px;

  @media only screen and (max-width: 1024px) {
    width: 480px;
    height: 320px;
  }
`;
