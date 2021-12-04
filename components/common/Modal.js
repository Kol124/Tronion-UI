import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export default function Modal({ show, onClose, children, title }) {
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
  height: 40%;
  width: 56.5rem;
  padding: 2.5rem;
  overflow: hidden;
  border-radius: 2px;
  position: absolute;
  background-color: #f6f6f6;
  transform: translate(-50%, -50%);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
`;

const Close = styled.div`
  display: flex;
  font-size: 2.5rem;
  justify-content: flex-end;

  a {
    color: #f48732;
  }
`;

// https://devrecipes.net/modal-component-with-next-js/
