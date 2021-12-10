import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Counter } from "@/components/common";

export function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true));

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <LightBox>
      <LightBoxContent>
        <Close>
          <a href="#" onClick={handleClose}>
            <FaTimes />
          </a>
        </Close>
        {title && <div>{title}</div>}
        <div>{children}</div>
        <Counter>
          <span>0/3</span>
        </Counter>
      </LightBoxContent>
    </LightBox>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

const LightBox = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3000;
  transition: all 0.3s;
  background: rgba(0, 0, 0, 0.6);
`;

const LightBoxContent = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  border-radius: 20px;
  transition: all 0.2s ease;
  padding: 2.5rem 2.5rem 3rem;
  transform: translate(-50%, -50%);
  border: ${(p) => p.theme.border};
  background: ${(p) => p.theme.backgroundPrimary};

  @media only screen and (min-width: 768px) {
    min-width: 480px;
  }

  @media only screen and (max-width: 480px) {
    width: 95%;
    padding: 2rem 1.2rem 2.5rem;
  }
`;

const Close = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: flex-end;

  a {
    color: #fff;
  }
`;

// https://devrecipes.net/modal-component-with-next-js/
