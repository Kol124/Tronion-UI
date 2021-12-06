import styled from "styled-components";

export const Heading = styled.h2`
  font-weight: 400;

  &.h1 {
    font-size: 44px;

    @media only screen and (max-width: 1024px) {
      font-size: 30px;
    }
  }

  &.h2 {
    font-size: 40px;

    @media only screen and (max-width: 1024px) {
      font-size: 30px;
    }
  }

  &.h3 {
    font-size: 25px;

    @media only screen and (max-width: 1024px) {
      font-size: 20px;
    }
  }

  &.h4 {
    font-size: 18px;

    @media only screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }

  &.bold {
    font-weight: 700;
  }

  &.bolder {
    font-weight: 900;
  }

  &.center {
    text-align: center;
  }

  &.right {
    text-align: right;
  }
`;
