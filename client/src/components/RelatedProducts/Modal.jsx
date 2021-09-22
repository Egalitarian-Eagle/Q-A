import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ReactDom from "react-dom";
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  return (
    <>
    {isModalOpen ? (
      <Background>
        <ModalWrapper isModalOpen={isModalOpen}>
          <ModalContent>
            Hi this is a modal
            {/* {children} */}
          </ModalContent>
          <CloseModalButton aria-label='Close modal' onClick={() => setIsModalOpen(prevState => !prevState)} />
        </ModalWrapper>
      </Background>
    ) : null}
    </>
  )
}

export default Modal;
