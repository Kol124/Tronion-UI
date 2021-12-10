import styled from "styled-components";

export const Button = styled.button`
  border: none;
  font: inherit;
  color: #f9f9f9;
  border-radius: 50px;
  background: inherit;
  transition: all 0.3s ease;
  background: #494850;
  padding: 4px 20px;
  cursor: pointer;
  outline: none;

  &.primary {
    padding: 8px 40px;
    border-radius: 50px;
    background: ${(p) => p.theme.btnPrimary};
  }

  &.secondary {
    width: 100%;
    padding: 8px 0;
    font-weight: 700;
    background: #9beaf1;
    border-radius: 50px;
    font-size: 16px;
    color: #121116;

    :hover {
      background: none;
      border: 1px solid #9beaf1;
      color: ${(p) => p.theme.white};
    }
  }

  &.small {
    min-width: 90px;
    padding: 5px 0;
    color: #14131a;
    border-radius: 50px;
    background: ${(p) => p.theme.white};

    :hover {
      font-weight: 900;
      background: ${(p) => p.theme.white};
      border: none;
    }
  }

  :hover {
    background: inherit;
    border: 1px solid ${(p) => p.theme.white};
  }
`;
