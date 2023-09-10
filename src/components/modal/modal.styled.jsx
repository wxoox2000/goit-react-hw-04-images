import styled from 'styled-components';

const animModeOverlay = p => {
  switch(p.children.props.closing) {
    case false:
      return 'popUp 350ms ease 1 alternate forwards';
    case true:
      return 'popOut 350ms 350ms ease 1 alternate backwards';
    default:
      return null;
  }
}

const animModeModal = p => {
  switch(p.children.props.closing) {
    case false:
      return 'popUpImg 350ms 350ms ease 1 alternate backwards';
    case true:
      return 'popOutImg 350ms ease 1 alternate forwards';
    default:
      return null;
  }
}

export const Overlay = styled.div`
  @keyframes popUp {
    0% {
      background-color: rgb(51, 45, 45, 0.4);
      opacity: 0.3;
      backdrop-filter: blur(1px);
    }
    100% {
      background-color: rgb(51, 45, 45, 0.7);
      opacity: 1;
      backdrop-filter: blur(5px);
    }
  }
  @keyframes popOut {
    0% {
      background-color: rgb(51, 45, 45, 0.7);
      opacity: 1;
      backdrop-filter: blur(5px);
    }
    100% {
      background-color: rgb(51, 45, 45, 0.4);
      opacity: 0.1;
      backdrop-filter: blur(1px);
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animModeOverlay};
`;

export const Modal = styled.div`
  @keyframes popUpImg {
    0% {
      opacity: 0;
      filter: blur(3px);
    }
    25% {
      opacity: 0.2;
      filter: blur(2px);
    }
    50% {
      opacity: 0.4;
      filter: blur(1px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
  @keyframes popOutImg {
    0% {
      opacity: 1;
      filter: blur(0);
    }
    25% {
      opacity: 0.4;
      filter: blur(1px);
    }
    50% {
      opacity: 0.2;
      filter: blur(2px);
    }
    100% {
      opacity: 0;
      filter: blur(3px);
    }
  }
  animation: ${animModeModal};

  width: fit-content;
`;

// export const Image = styled.img`
//   width: 70vw;
//   height: 70vh;
// `;
