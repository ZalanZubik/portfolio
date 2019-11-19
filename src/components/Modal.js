import React from 'react';
import styled from 'styled-components';
import { ProjectContext } from '../context';
import { IoMdClose } from 'react-icons/io';

class Modal extends React.Component {

  static contextType = ProjectContext;

  render() {
    const { modalOpen, modalImage, closeModal } = this.context;

    if (!modalOpen) {
      return null;
    }
    else {
      return (
        <ModalContainer>
          <div className="modal-content">
            <img className="modal-img" src={modalImage} alt="project content" />
            <button className="modal-btn" title="Close" onClick={() => closeModal()}><IoMdClose className="modal-btn-icon" /></button>
          </div>
        </ModalContainer>
      );
    }
  }
}

export default Modal;

const ModalContainer = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    background: white;
    position: relative;
    width: 75%;
    animation-name: zoom;
    animation-duration: 0.5s;
  }

  @keyframes zoom {
    from {transform: scale(0)} 
    to {transform: scale(1)}
  }

  .modal-img {
    width: 100%;
    margin: auto;
    display: block;
  }

  .modal-btn {
    position: absolute;
    right: -40px;
    bottom: calc(100% - 2.25rem);
    cursor: pointer;
    border: 2px solid var(--mainWhite);
    border-radius: 5px;
    outline: none;
    background: none;
    animation-name: btnFadeIn;
    animation-duration: 1.3s;
    animation-timing-function: ease-in;
    transition: border 350ms ease-out;
  }

  @keyframes btnFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal-btn-icon {
    vertical-align: middle;
    font-size: 2rem;
    color: var(--mainWhite);
    transition: color 350ms ease-out;
  }

  .modal-btn:hover {
    border: 2px solid var(--hoverColor);
  }

  .modal-btn:hover .modal-btn-icon {
    color: var(--hoverColor);
  }

  /* Media Queries */

  @media screen and (max-width: 1500px) {
    .modal-content {
      width: 85%;
    }
  }

  @media screen and (max-width: 1040px) {
    .modal-content {
      width: 94%;
    }

    .modal-btn {
      right: calc(50% - 1rem - 2px);
      bottom: -2.5rem;
    }
  }
`;