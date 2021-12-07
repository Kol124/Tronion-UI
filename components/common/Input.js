import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  font-family: inherit;
  transition: all 0.3s;
  margin-bottom: 1.5rem;
  background-color: inherit;
  color: ${(p) => p.theme.white};
  padding: 1.5rem 2rem 1.5rem 3.3rem;
  border: ${(p) => p.theme.inputBorder};

  &:focus {
    outline: none;
    background-color: inherit;
    border: 1px solid ${(p) => p.theme.white};
  }

  &::-webkit-input-placeholder {
    color: ${(p) => p.theme.inputColor};
  }
`;

export { InputContainer, Input };
