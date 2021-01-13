import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

const Modal = ({ isVisible = false, title, content, footer, onClose }) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return !isVisible
    ? null
    : ReactDOM.createPortal(
        <React.Fragment>
          <S.Container onClick={onClose}>
            <S.Dialog onClick={(e) => e.stopPropagation()}>
              <S.Header>
                <S.Title>{title}</S.Title>
                <S.Close onClick={onClose}>&times;</S.Close>
              </S.Header>
              <S.Body>
                <S.Content>{content}</S.Content>
              </S.Body>
              {footer && <S.Footer>{footer}</S.Footer>}
            </S.Dialog>
          </S.Container>
        </React.Fragment>,
        document.body
      );
};

Modal.propTypes = {
  content: PropTypes.any,
  footer: PropTypes.any,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.any,
};

export default Modal;

/**
 * Style Modal
 */

const S = {};

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-150px);
  }
  to {
    transform: translateY(0);
  }
`;

S.Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  animation-name: ${appear};
  animation-duration: 300ms;
`;

S.Dialog = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e3e9ef;
  border-radius: 0.4375rem;
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: ${slideIn};
  animation-duration: 0.5s;

  @media (max-width: 576px) {
    margin: 1rem;
  }
`;

S.Layout = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
`;

S.Header = styled(S.Layout)`
  justify-content: space-between;
  border-bottom: 1px solid #e3e9ef;
  border-top-left-radius: calc(0.4375rem - 1px);
  border-top-right-radius: calc(0.4375rem - 1px);
`;

S.Footer = styled(S.Layout)`
  justify-content: flex-end;
  border-top: 1px solid #e3e9ef;
  border-bottom-left-radius: calc(0.4375rem - 1px);
  border-bottom-right-radius: calc(0.4375rem - 1px);
`;

S.Close = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1;
  padding: 1rem 1.25rem;
  margin: -1rem -1.25rem -1rem auto;
  transition: opacity 0.15s ease-in-out;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

S.Body = styled.div`
  overflow: auto;
`;

S.Content = styled.div`
  padding: 1rem;
`;

S.Title = styled.h5`
  margin-bottom: 0;
  line-height: 1.5;
  font-weight: 500;
  color: #373f50;
`;
