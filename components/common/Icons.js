import styled from "styled-components";
import { FaRegUser, FaLock, FaRegEnvelope, FaRegCircle } from "react-icons/fa";

const LargeIcon = styled.div`
  border: 1px solid #6a686a;
  border-radius: 50%;
  margin: 3rem auto;
  height: 154px;
  width: 154px;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    fill: ${(p) => p.theme.inputColor};
  }
`;

const InputUserIcon = styled(FaRegUser)`
  fill: ${(p) => p.theme.inputColor};
  font-size: 18px;
  top: 15px;
  left: 1.5rem;
  position: absolute;
`;

const InputPasswordIcon = styled(FaLock)`
  fill: ${(p) => p.theme.inputColor};
  font-size: 18px;
  top: 15px;
  left: 1.5rem;
  position: absolute;
`;

const InputEmailIcon = styled(FaRegEnvelope)`
  fill: ${(p) => p.theme.inputColor};
  font-size: 18px;
  top: 15px;
  left: 1.5rem;
  position: absolute;
`;

const CircleIcon = styled(FaRegCircle)`
  fill: #6a686a;
  margin-right: 1rem;
  border-radius: 50%;
  background: #808080;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const ListIcon = styled(FaRegCircle)`
  fill: #6a686a;
  font-size: 15px;
  border-radius: 50%;
  margin-right: 1.3rem;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-right: 12px;
  }
`;

export {
  LargeIcon,
  InputUserIcon,
  InputPasswordIcon,
  InputEmailIcon,
  CircleIcon,
  ListIcon,
};
