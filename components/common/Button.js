import styled, { css } from "styled-components";

const SecondaryStyle = ({ secondary }) => {
  if (secondary) {
    return css`
      padding: 5px 10px;
      background: #333;
    `;
  } else {
    return css`
      font-size: 14px;
      padding: 8px 40px;
      border-radius: 50px;
      background: ${(p) => p.theme.btnPrimary};
    `;
  }
};

export const Button = styled.button`
  border: none;
  font: inherit;
  color: #f9f9f9;
  transition: all 0.3s ease;
  margin-left: 7%;
  cursor: pointer;
  outline: none;

  :hover {
    border: 1px solid #f9f9f9;
    background: ${(p) => p.theme.backgroundPrimary};
  }

  ${SecondaryStyle};
`;
