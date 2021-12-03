import styled, { css } from "styled-components";

const SecondaryStyle = ({ secondary }) => {
  if (secondary) {
    return css`
      padding: 5px 10px;
      background: #333;
    `;
  } else {
    return css`
      padding: 7px 12px;
      font-size: 1.4rem;
      background: rgb(244, 135, 50);
    `;
  }
};

export const Button = styled.button`
  border: none;
  font: inherit;
  color: #f9f9f9;
  border-radius: 2px;
  transition: 0.3s ease;
  cursor: pointer;
  outline: none;
  ${SecondaryStyle};

  :hover {
    background: #f9f9f9;
    color: rgb(244, 135, 50);
    border: 1px solid rgb(244, 135, 50);
  }
`;
