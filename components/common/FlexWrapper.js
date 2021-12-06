import styled from "styled-components";

export const FlexWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
