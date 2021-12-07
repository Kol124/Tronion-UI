import styled from "styled-components";

export const FormLinkBox = styled.section`
  display: flex;
  min-height: 40px;
  padding: 5px 10px;
  border-radius: 12px;
  align-items: center;
  background-color: ${(p) => p.theme.white};

  p {
    padding: 0 10px;
    margin-left: 10px;
    border-left: 1px solid #d4dee7;
  }

  .icon-left {
    fill: #01ac5a;
  }

  .icon-right {
    fill: #5e6875;
    cursor: pointer;
    margin-left: auto;
  }
`;
