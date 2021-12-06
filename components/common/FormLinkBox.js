import styled from "styled-components";

export const FormLinkBox = styled.section`
  height: 40px;
  display: flex;
  border-radius: 12px;
  align-items: center;
  background-color: ${(p) => p.theme.white};

  .icon-left {
    width: 10%;
    height: 85%;
    fill: #01ac5a;
    padding: 0 10px;
    margin-right: 10px;
    border-right: 1px solid #d4dee7;
  }

  .icon-right {
    width: 10%;
    height: 85%;
    fill: #5e6875;
    padding: 0 10px;
    margin-left: auto;
    cursor: pointer;
  }
`;
